import { NextResponse } from 'next/server';

// 1. RATE LIMITING EN MEMORIA (Evita ataques DDoS básicos y spam de formularios)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minuto
const MAX_REQUESTS_PER_WINDOW = 3;  // Máximo 3 formularios por minuto por IP

// 2. ORÍGENES PERMITIDOS (CORS)
const ALLOWED_ORIGINS = ['espinlabs.com', 'localhost:3000', '127.0.0.1:3000'];

export async function POST(request: Request) {
  try {
    // --- PUNTO 5: RATE LIMITING ---
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown-ip';
    const now = Date.now();
    
    if (ip !== 'unknown-ip') {
      const windowData = rateLimitMap.get(ip);
      if (windowData) {
        if (now - windowData.timestamp < RATE_LIMIT_WINDOW_MS) {
          if (windowData.count >= MAX_REQUESTS_PER_WINDOW) {
            console.warn(`[SECURITY] Bloqueo por Spam a la IP: ${ip}`);
            // No decimos "Estás bloqueado por spam" para no dar pistas, devolvemos un error neutro
            return NextResponse.json({ success: false, error: "Demasiadas peticiones. Inténtelo más tarde." }, { status: 429 });
          }
          windowData.count++;
        } else {
          rateLimitMap.set(ip, { count: 1, timestamp: now });
        }
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    }

    // --- PUNTO 7: VALIDACIÓN CORS / ORIGEN ---
    const origin = request.headers.get('origin') || request.headers.get('referer') || '';
    const isAllowedOrigin = ALLOWED_ORIGINS.some(o => origin.includes(o));
    
    // Si viene un origin y no coincide con nuestra web, lo rechazamos (bloquea envíos desde Postman u otras webs)
    if (origin && !isAllowedOrigin && process.env.NODE_ENV === 'production') {
      console.warn(`[SECURITY] Bloqueo CORS para el origen: ${origin}`);
      return NextResponse.json({ success: false, error: "Origen no autorizado." }, { status: 403 });
    }

    // --- PARSEO SEGURO ---
    let data;
    try {
      data = await request.json();
    } catch (e) {
      return NextResponse.json({ success: false, error: "Formato incorrecto." }, { status: 400 });
    }

    // --- HONEYPOT ANTI-SPAM ---
    // Si el bot rellenó el campo invisible, fingimos éxito y no enviamos nada a Make.
    if (data.contacto_directo) {
      console.warn(`[SECURITY] Bot cazado por Honeypot. IP: ${ip}`);
      // Le devolvemos un 200 OK para que se vaya contento y no intente otras vulnerabilidades
      return NextResponse.json({ success: true });
    }

    // --- PUNTO 4: VALIDACIÓN ESTRICTA EN EL SERVIDOR ---
    const { nombre, email, empresa, problema, servicios } = data;
    
    // El hacker inyecta campos o manda un nombre de 50.000 letras para tirar el servidor
    if (!nombre || typeof nombre !== 'string' || nombre.length > 150) {
      return NextResponse.json({ success: false, error: "Datos no válidos." }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.includes('@') || email.length > 150) {
      return NextResponse.json({ success: false, error: "Datos no válidos." }, { status: 400 });
    }
    if (problema && (typeof problema !== 'string' || problema.length > 3000)) {
      return NextResponse.json({ success: false, error: "Texto demasiado largo." }, { status: 400 });
    }

    // Construimos el Payload limpio descartando cualquier basura inyectada
    const safePayload = {
      nombre,
      email,
      empresa: typeof empresa === 'string' ? empresa.substring(0, 150) : '',
      problema: typeof problema === 'string' ? problema : '',
      servicios: typeof servicios === 'string' ? servicios.substring(0, 200) : ''
    };

    // --- PUNTO 2: SECRETOS DEL LADO DEL SERVIDOR ---
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    
    if (!webhookUrl) {
      // PUNTO 8: Antes filtrábamos "MAKE_WEBHOOK_URL no configurada". Ahora ocultamos ese detalle.
      console.error("[CRITICAL] MAKE_WEBHOOK_URL no está configurada.");
      return NextResponse.json({ success: false, error: "Error interno del servidor." }, { status: 500 });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(safePayload),
    });

    if (!response.ok) {
      // --- PUNTO 8: OCULTACIÓN DE ERRORES REALES ---
      const text = await response.text();
      // El error real se queda en tus logs (Vercel console)
      console.error(`[WEBHOOK_ERROR] Make devolvió HTTP ${response.status}: ${text}`);
      // Al atacante/cliente solo le damos un mensaje mudo
      return NextResponse.json({ success: false, error: "Error interno del servidor." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("[API_EXCEPTION]", error);
    return NextResponse.json({ success: false, error: "Error interno del servidor." }, { status: 500 });
  }
}
