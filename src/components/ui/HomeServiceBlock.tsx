import React from "react";
import Link from "next/link";

function getIconForId(id: string) {
  if (id === "01") {
    // Desarrollo - Minimalist Code
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    );
  } else if (id === "02") {
    // Agentes - Minimalist Microchip
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-16.5v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    );
  } else {
    // Identidad - Minimalist Fingerprint
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
    );
  }
}

export function HomeServiceBlock({ phase, align }: { phase: { id: string, title: string, desc: string, link: string, sysText: string }, align: 'left' | 'right' }) {
  const isRight = align === 'right';

  return (
    <Link href={phase.link || "/"} className="group block w-full border-t border-zinc-900 relative overflow-hidden">
      {/* Container */}
      <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-16 py-16 md:py-28 relative z-10 px-8 md:px-16 max-w-[100vw] ${!isRight ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Yellow Lateral Bar (Fixed on mobile, hover on desktop) */}
        <div className={`absolute top-0 bottom-0 w-2 md:w-3 bg-[#F5B700] transform scale-y-100 md:scale-y-0 origin-top transition-transform duration-700 ease-[0.76,0,0.24,1] group-hover:scale-y-100 ${isRight ? 'right-0' : 'left-0'}`}></div>

        {/* ICON (Replaces the Number) 
            Mobile: Absolute behind text, very low opacity so it doesn't hurt readability.
            Desktop: Relative, huge, pulled towards center, semi-transparent becoming fully visible on hover. 
        */}
        <div className={`absolute inset-0 md:inset-auto md:relative w-full md:w-5/12 flex items-center justify-center -z-10 md:z-10 ${isRight ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'}`}>
          <div className="w-[80vw] h-[80vw] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] text-[#F5B700] opacity-5 md:opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"> 
            {getIconForId(phase.id)}
          </div>
        </div>

        {/* Text Content */}
        <div className={`w-full md:w-7/12 flex flex-col relative z-20 ${isRight ? 'items-end text-right' : 'items-start text-left'}`}>
          <h3 className="font-clash font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase mb-6 text-[#F5B700] md:text-white group-hover:text-[#F5B700] transition-colors duration-500">
            {phase.title}
          </h3> 
          <p className="font-inter font-light text-lg md:text-2xl text-[#d4d4d8] leading-relaxed max-w-3xl">
            {phase.desc}
          </p>
          
          {/* sys: running text */}
          <div className="font-mono text-[9px] md:text-[11px] text-[#F5B700] uppercase tracking-widest mt-8 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {phase.sysText}
          </div>
        </div>

      </div>
    </Link>
  );
}
