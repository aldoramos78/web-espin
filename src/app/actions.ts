"use server"

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;

  if (!webhookUrl) {
    return { success: false, error: "MAKE_WEBHOOK_URL no está configurada en las Variables de Entorno de Vercel (Production)." };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text();
      return { success: false, error: `Webhook devolvió HTTP ${response.status}: ${text}` };
    }

    return { success: true };
  } catch (error: any) {
    return { success: false, error: `Excepción interna: ${error.message || String(error)}` };
  }
}
