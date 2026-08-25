import React from "react";
import Link from "next/link";

export default function TestIconos() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="mb-12">
          <Link href="/" className="inline-block">
            <button type="button" className="rings-btn small">
              <i></i><i></i><i></i>
              <span>Volver</span>
            </button>
          </Link>
          <h1 className="font-clash text-2xl md:text-4xl text-[#F5B700] mt-8 mb-4 uppercase font-bold">PREVIEW DE ICONOS ORIGINALES</h1>
          <p className="font-inter text-zinc-400 mb-12">
            Estos son los primeros iconos técnicos que generamos en la ruta de prueba original.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Icono 1 */}
          <div className="flex flex-col items-center border border-zinc-900 p-8">
            <h2 className="font-space-mono text-xs tracking-widest text-zinc-500 mb-8 uppercase">1. Desarrollo / Arquitectura</h2>
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F5B700" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" className="opacity-80">
              <rect x="3" y="3" width="18" height="18" strokeDasharray="1 2"/>
              <rect x="2" y="2" width="4" height="4" fill="#F5B700"/>
              <rect x="18" y="2" width="4" height="4"/>
              <rect x="2" y="18" width="4" height="4"/>
              <rect x="10" y="10" width="4" height="4" fill="#F5B700"/>
              <rect x="18" y="18" width="4" height="4" fill="#F5B700"/>
              <line x1="6" y1="4" x2="18" y2="4"/>
              <line x1="4" y1="6" x2="4" y2="18"/>
              <line x1="6" y1="12" x2="10" y2="12"/>
              <line x1="14" y1="12" x2="18" y2="18"/>
              <line x1="12" y1="14" x2="12" y2="20"/>
            </svg>
          </div>

          {/* Icono 2 */}
          <div className="flex flex-col items-center border border-zinc-900 p-8">
            <h2 className="font-space-mono text-xs tracking-widest text-zinc-500 mb-8 uppercase">2. Agentes / Automatización</h2>
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F5B700" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" className="opacity-80">
              <polygon points="12,4 20,12 12,20 4,12"/>
              <line x1="12" y1="4" x2="12" y2="0"/>
              <line x1="12" y1="20" x2="12" y2="24"/>
              <line x1="4" y1="12" x2="0" y2="12"/>
              <line x1="20" y1="12" x2="24" y2="12"/>
              <circle cx="12" cy="12" r="2" fill="#F5B700"/>
              <rect x="6" y="6" width="2" height="2"/>
              <rect x="16" y="6" width="2" height="2"/>
              <rect x="6" y="16" width="2" height="2"/>
              <rect x="16" y="16" width="2" height="2"/>
            </svg>
          </div>

          {/* Icono 3 */}
          <div className="flex flex-col items-center border border-zinc-900 p-8">
            <h2 className="font-space-mono text-xs tracking-widest text-zinc-500 mb-8 uppercase">3. Identidad / Escaneo</h2>
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F5B700" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" className="opacity-80">
              <circle cx="12" cy="12" r="10" strokeDasharray="2 4"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2" fill="#F5B700"/>
              <line x1="12" y1="0" x2="12" y2="4"/>
              <line x1="12" y1="20" x2="12" y2="24"/>
              <line x1="0" y1="12" x2="4" y2="12"/>
              <line x1="20" y1="12" x2="24" y2="12"/>
              <path d="M12 12 L19 5" strokeDasharray="1 2"/>
            </svg>
          </div>

          {/* Icono 4 */}
          <div className="flex flex-col items-center border border-zinc-900 p-8">
            <h2 className="font-space-mono text-xs tracking-widest text-zinc-500 mb-8 uppercase">4. Ecosistema / Escudo</h2>
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F5B700" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" className="opacity-80">
              <polygon points="12,2 20,6 20,15 12,22 4,15 4,6" strokeDasharray="3 3"/>
              <polygon points="12,5 17,8 17,14 12,19 7,14 7,8" />
              <line x1="10" y1="10" x2="14" y2="10"/>
              <line x1="10" y1="12" x2="14" y2="12"/>
              <line x1="10" y1="14" x2="14" y2="14"/>
              <line x1="12" y1="2" x2="12" y2="5"/>
            </svg>
          </div>
        </div>

        <div className="mb-12 pt-12 border-t border-zinc-900">
          <h1 className="font-clash text-2xl md:text-4xl text-[#F5B700] mt-8 mb-4 uppercase font-bold">PREVIEW DE ICONOS (V2 MINIMALISTAS)</h1>
          <p className="font-inter text-zinc-400 mb-12">
            Estos son los iconos limpios y minimalistas que hicimos en la segunda iteración.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Icono 1 */}
          <div className="flex flex-col items-center border border-zinc-900 p-8">
            <h2 className="font-space-mono text-xs tracking-widest text-zinc-500 mb-8 uppercase">1. Desarrollo Web (Código)</h2>
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F5B700" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
              <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>

          {/* Icono 2 */}
          <div className="flex flex-col items-center border border-zinc-900 p-8">
            <h2 className="font-space-mono text-xs tracking-widest text-zinc-500 mb-8 uppercase">2. Agentes IA (Microchip)</h2>
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F5B700" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
              <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-16.5v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>

          {/* Icono 3 */}
          <div className="flex flex-col items-center border border-zinc-900 p-8">
            <h2 className="font-space-mono text-xs tracking-widest text-zinc-500 mb-8 uppercase">3. Identidad (Visión / Marca)</h2>
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F5B700" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
              <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          {/* Icono 4 */}
          <div className="flex flex-col items-center border border-zinc-900 p-8">
            <h2 className="font-space-mono text-xs tracking-widest text-zinc-500 mb-8 uppercase">4. Ecosistema (Bloque/Estructura)</h2>
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F5B700" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
              <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </div>

        </div>

      </div>
    </div>
  );
}
