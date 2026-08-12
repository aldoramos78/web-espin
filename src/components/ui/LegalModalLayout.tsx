"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export function LegalModalLayout({ children, title }: { children: React.ReactNode, title?: string }) {
  const router = useRouter();

  // Prevent scrolling on background when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer transition-opacity duration-500" 
        onClick={handleClose}
      ></div>

      {/* "Popup" Container */}
      <div className="w-full max-w-4xl bg-black border border-zinc-800 shadow-2xl relative z-10 flex flex-col overflow-hidden max-h-[90vh] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header / Top Bar */}
        <div className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-zinc-800 bg-black sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#F5B700]"></div>
            <span className="font-michroma text-xs md:text-sm tracking-widest text-zinc-400 uppercase">
              {title || "Protocolo Legal"}
            </span>
          </div>
          <button 
            onClick={handleClose} 
            className="group flex items-center gap-2 hover:text-[#F5B700] transition-colors cursor-pointer"
          >
            <span className="text-xs font-space-mono tracking-widest uppercase text-zinc-500 group-hover:text-[#F5B700] transition-colors">Cerrar</span>
            <svg className="w-5 h-5 text-zinc-500 group-hover:text-[#F5B700] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar relative">
          {/* Subtle Grid Background inside content */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(#666 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
