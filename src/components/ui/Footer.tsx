"use client";
import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black pt-10 md:pt-20 pb-0 px-6 md:px-32 relative z-10 border-t border-zinc-900">
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-12 items-start">
        
        {/* ISO Logo */}
        <div className="hidden md:flex flex-col justify-start items-start md:w-1/3">
          <button type="button" aria-label="Volver arriba" className="inline-block text-white hover:text-zinc-300 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            {/* The ISO SVG from icon.svg but using currentColor instead of class */}
            <svg aria-hidden="true" className="h-32 md:h-56 w-auto" viewBox="0 0 406 348" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M252.188 140.625L236.562 117.188L377.188 0L405.996 41.9922L252.188 140.625Z" fill="#F5B700"/>
              <path d="M170.166 55.3789C206.136 55.3789 235.921 57.9017 259.521 62.9473C266.593 64.4591 273.124 66.3798 279.114 68.71L242.746 99.0166C238.964 98.2723 234.871 97.6421 230.469 97.127C215.332 95.3366 195.231 94.4414 170.166 94.4414C143.636 94.4414 122.233 95.418 105.957 97.3711C89.8438 99.3242 77.5553 103.149 69.0918 108.846C60.6283 114.38 54.8503 122.68 51.7578 133.748C48.8281 144.816 47.2819 159.383 47.1191 177.449H284.912V154.012C284.912 145.974 284.261 138.894 282.959 132.771L321.891 107.806C327.186 120.229 329.834 135.631 329.834 154.012V214.314H47.1191C47.2819 235.148 48.7467 251.831 51.5137 264.363C54.2806 276.896 59.8145 286.336 68.1152 292.684C76.416 299.031 88.7858 303.263 105.225 305.379C121.826 307.332 143.88 308.309 171.387 308.309C196.126 308.309 216.064 307.82 231.201 306.844C246.501 305.867 258.057 303.751 265.869 300.496C273.844 297.078 279.215 292.033 281.982 285.359C284.749 278.686 286.133 269.734 286.133 258.504H329.834C329.834 279.5 326.66 296.02 320.312 308.064C314.128 320.109 304.606 328.898 291.748 334.432C278.89 339.965 262.451 343.465 242.432 344.93C222.575 346.557 198.893 347.371 171.387 347.371C139.974 347.371 113.281 345.743 91.3086 342.488C69.4987 339.396 51.8392 332.967 38.3301 323.201C24.9837 313.273 15.2181 298.462 9.0332 278.768C3.01107 259.074 0 232.788 0 199.91C0 168.009 2.92969 142.456 8.78906 123.25C14.8112 104.044 24.4954 89.5586 37.8418 79.793C51.1882 70.0273 68.6849 63.5169 90.332 60.2617C112.142 57.0065 138.753 55.3789 170.166 55.3789Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        {/* Navigation Blocks */}
        <div className="flex flex-row justify-between md:justify-end gap-4 sm:gap-8 md:gap-24 w-full md:w-2/3">
          <div className="flex flex-col gap-4 md:gap-6 flex-1 md:flex-none">
 <span className="font-clash font-semibold text-[#F5B700] text-[10px] md:text-xs uppercase mb-1 md:mb-2">Servicios</span> 
            {[
              { name: 'Desarrollo', path: '/infraestructura' },
              { name: 'Agentes', path: '/sistemas-autonomos' },
              { name: 'Identidad', path: '/genesis' }
            ].map((item) => (
              <Link key={item.name} href={item.path} className="group flex justify-between items-center py-1 md:py-2 border-b border-zinc-900 transition-all duration-300 hover:border-zinc-800 cursor-pointer">
 <span className="text-white font-clash font-semibold group-hover:text-[#F5B700] group-hover:scale-[1.02] transform transition-all duration-300 origin-left uppercase text-[8px] md:text-[11px] md: ">{item.name}</span> 
                <span className="text-zinc-500 group-hover:text-[#F5B700] transition-colors duration-300 text-[10px] md:text-sm transform group-hover:-translate-y-1 group-hover:translate-x-1 ml-2">→</span>
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 md:gap-6 flex-1 md:flex-none">
 <span className="font-clash font-semibold text-[#F5B700] text-[10px] md:text-xs uppercase mb-1 md:mb-2">Legalidad</span> 
            {[
              { name: 'Aviso Legal', path: '/aviso-legal' },
              { name: 'Privacidad', path: '/politica-de-privacidad' },
              { name: 'Cookies', path: '/politica-de-cookies' }
            ].map((item) => (
              <Link key={item.name} href={item.path} target="_blank" rel="noopener noreferrer" className="group flex justify-between items-center py-1 md:py-2 border-b border-zinc-900 transition-all duration-300 hover:border-zinc-800 cursor-pointer">
 <span className="text-white font-clash font-semibold group-hover:text-[#F5B700] group-hover:scale-[1.02] transform transition-all duration-300 origin-left uppercase text-[8px] md:text-[11px] md: ">{item.name}</span> 
                <span className="text-zinc-500 group-hover:text-[#F5B700] transition-colors duration-300 text-[10px] md:text-sm transform group-hover:-translate-y-1 group-hover:translate-x-1 ml-2">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="-mx-6 md:-mx-12 px-6 md:px-32 mt-12 md:mt-16 py-6 md:py-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
        <p className="flex-1 text-center md:text-left order-2 md:order-1">© {new Date().getFullYear()} Espín Labs.</p>
        <a href="mailto:contacto@espinlabs.com" className="flex-1 text-center hover:text-[#F5B700] transition-colors order-1 md:order-2 text-zinc-400 font-inter normal-case text-xs md:text-sm">
          contacto@espinlabs.com
        </a>
        <div className="flex-1 flex justify-center md:justify-end items-center gap-3 order-3">
          <span className="w-1 h-1 bg-[#F5B700]"></span>
          <p>Alta Costura Tecnológica</p>
        </div>
      </div>
    </footer>
  );
}
