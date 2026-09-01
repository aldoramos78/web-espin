"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificamos si el usuario ya ha tomado una decisión previamente
    const consent = localStorage.getItem("espin_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("espin_cookie_consent", "accepted");
    setShowBanner(false);
    
    // Aquí es donde en el futuro se dispara el evento para cargar Google Analytics o el Píxel de Meta
    // window.dispatchEvent(new Event("cookies_accepted"));
  };

  const handleReject = () => {
    localStorage.setItem("espin_cookie_consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full md:bottom-8 md:left-8 md:max-w-md z-[9999]">
      {/* Caja del banner en versión brutalista / premium */}
      <div className="bg-black border border-zinc-800 p-6 md:p-8 shadow-2xl flex flex-col gap-4">
        
        <h3 className="font-clash font-semibold text-[#F5B700] text-sm md:text-base uppercase tracking-widest flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#F5B700]"></div>
          Gestión de Privacidad
        </h3>
        
        <p className="font-inter text-zinc-400 text-xs md:text-sm leading-relaxed">
          Utilizamos cookies propias y de terceros para optimizar nuestra infraestructura, 
          analizar el tráfico y ofrecer una experiencia de alta costura. Puedes aceptar 
          todas las cookies, rechazarlas o leer nuestra{' '}
          <Link href="/politica-de-cookies" className="text-white hover:text-[#F5B700] transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-[#F5B700]">
            política de cookies
          </Link>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4 font-mono text-xs uppercase tracking-widest">
          <button 
            onClick={handleAccept}
            className="flex-1 bg-white text-black hover:bg-[#F5B700] hover:text-black py-3 px-4 transition-colors text-center font-bold"
          >
            Aceptar
          </button>
          <button 
            onClick={handleReject}
            className="flex-1 bg-transparent border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white py-3 px-4 transition-colors text-center"
          >
            Rechazar
          </button>
        </div>
        
      </div>
    </div>
  );
}
