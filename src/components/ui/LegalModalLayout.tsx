"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export function LegalModalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleClose = () => {
    // Si se abrió en una pestaña nueva (target="_blank"), window.close() funcionará
    // Si no, volvemos a la home como fallback
    if (window.history.length > 1) {
      router.back();
    } else {
      window.close();
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 md:p-12">
      {/* Container */}
      <div className="w-full max-w-4xl bg-black border border-zinc-800 shadow-2xl relative z-10 flex flex-col mt-12 md:mt-0 max-h-[90vh]">
        
        {/* Scrollable Content */}
        <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar relative">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 md:top-12 md:right-12 p-2 group transition-transform duration-500 hover:rotate-90 z-50"
            aria-label="Cerrar modal"
          >
            <div className="relative w-8 h-8">
              <span className="absolute top-1/2 left-0 w-8 h-[2px] bg-zinc-500 group-hover:bg-[#F5B700] rotate-45 transition-colors duration-300"></span>
              <span className="absolute top-1/2 left-0 w-8 h-[2px] bg-zinc-500 group-hover:bg-[#F5B700] -rotate-45 transition-colors duration-300"></span>
            </div>
          </button>
          
          {/* Subtle Grid Background inside content */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(#666 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          
          <div className="relative z-10 pr-12 md:pr-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
