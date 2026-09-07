'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const safePathname = pathname || '/es';
  const actualIsEn = safePathname.startsWith('/en');
  
  // Use optimistic state to allow smooth animation before navigation
  const [optimisticIsEn, setOptimisticIsEn] = useState(actualIsEn);

  // Sync state if pathname changes externally
  useEffect(() => {
    setOptimisticIsEn(actualIsEn);
  }, [actualIsEn]);

  const toggleLanguage = () => {
    // Strip trailing slash for robust matching
    const cleanPath = safePathname.endsWith('/') && safePathname.length > 1 ? safePathname.slice(0, -1) : safePathname;
    
    // Explicitly fallback if they are on root "/"
    if (cleanPath === '/') {
      setOptimisticIsEn(true);
      setTimeout(() => router.push('/en'), 350);
      return;
    }
    const routeMap: Record<string, string> = {
      // ES to EN
      '/es': '/en',
      '/es/desarrollo': '/en/development',
      '/es/agentes': '/en/agents',
      '/es/identidad': '/en/branding',
      '/es/ecosistema': '/en/ecosystem',
      '/es/manifiesto': '/en/manifesto',
      // EN to ES
      '/en': '/es',
      '/en/development': '/es/desarrollo',
      '/en/agents': '/es/agentes',
      '/en/branding': '/es/identidad',
      '/en/ecosystem': '/es/ecosistema',
      '/en/manifesto': '/es/manifiesto',
    };

    let newPath = routeMap[cleanPath] || routeMap[cleanPath + "/"];
    if (!newPath) {
      newPath = actualIsEn ? cleanPath.replace(/^\/en/, '/es') : cleanPath.replace(/^\/es/, '/en');
    }

    // Trigger animation immediately
    setOptimisticIsEn(!optimisticIsEn);

    // Wait for the mechanical slider transition (300ms) before navigating
    setTimeout(() => {
      router.push(newPath);
    }, 350);
  };

  return (
    <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={toggleLanguage}>
      {/* ES Label */}
      <span className={`text-[0.5rem] md:text-[0.65rem] font-inter tracking-[0.14em] transition-colors duration-300 ${!optimisticIsEn ? 'text-[#F5B700] drop-shadow-[0_0_3px_rgba(245,183,0,0.6)]' : 'text-white'}`}>
        ES
      </span>

      {/* The Physical Switch */}
      <button
        className="relative w-12 h-6 bg-[#050505] rounded-[2px] border border-[#555] shadow-[inset_0_2px_5px_rgba(0,0,0,1)] flex items-center p-[2px] focus:outline-none focus:ring-1 focus:ring-[#F5B700]/30 transition-transform active:scale-95 group"
        aria-label="Toggle language"
      >
        {/* The Slider Block */}
        <div 
          className={`w-5 h-full rounded-[1px] bg-gradient-to-b from-[#4a4a4a] to-[#111111] border border-[#666] shadow-[0_2px_4px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center transform transition-transform duration-300 ease-[cubic-bezier(0.8,0,0.2,1)] ${optimisticIsEn ? 'translate-x-[22px]' : 'translate-x-0'}`}
        >
          {/* Mechanical Grip Lines */}
          <div className="flex gap-[2px]">
            <div className="w-[1px] h-2.5 bg-[#111] shadow-[1px_0_0_rgba(255,255,255,0.15)]"></div>
            <div className="w-[1px] h-2.5 bg-[#111] shadow-[1px_0_0_rgba(255,255,255,0.15)]"></div>
          </div>
        </div>
      </button>

      {/* EN Label */}
      <span className={`text-[0.5rem] md:text-[0.65rem] font-inter tracking-[0.14em] transition-colors duration-300 ${optimisticIsEn ? 'text-[#F5B700] drop-shadow-[0_0_3px_rgba(245,183,0,0.6)]' : 'text-white'}`}>
        EN
      </span>
    </div>
  );
}

