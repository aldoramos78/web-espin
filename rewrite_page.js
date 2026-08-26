const fs = require('fs');

let content = `import React from "react";
import Link from "next/link";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { HomeServiceBlock } from "@/components/ui/HomeServiceBlock";
import { HeaderAndModal } from "@/components/ui/HeaderAndModal";
import { PreloaderManager } from "@/components/ui/PreloaderManager";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactTrigger } from "@/components/ui/ContactTrigger";

export default function EspinLanding() {
  const homeServices = [
    { 
      id: "01", 
      title: "Desarrollo de Alto Rendimiento", 
      desc: "Sistemas estáticos pierden dinero a cada segundo. Desplegamos infraestructuras web y aplicaciones ultrarrápidas, escalables y diseñadas exclusivamente para liderar tu mercado.", 
      link: "/desarrollo",
      align: "right",
      sysText: "sys: running / build optimized / 0ms latency / core active"
    },
    { 
      id: "02", 
      title: "Agentes y Automatización", 
      desc: "Tareas mecánicas devoran tu margen de beneficio. Integramos IA en tus flujos de trabajo para que tu empresa opere, soporte y venda en piloto automático 24/7.", 
      link: "/agentes",
      align: "left",
      sysText: "sys: neural net active / task automated / workflow optimal"
    },
    { 
      id: "03", 
      title: "Identidad Visual y Marca", 
      desc: "El aspecto de tu empresa es tu primera criba. Diseñamos una identidad sólida, elegante y disruptiva que blinda tu autoridad.", 
      link: "/identidad",
      align: "right",
      sysText: "sys: visual core loaded / brand identity established"
    }
  ];

  return (
    <>
      <PreloaderManager />
      
      <div className="min-h-screen bg-black text-white selection:bg-[#F5B700] selection:text-black font-inter overflow-x-hidden">
        
        <HeaderAndModal />
        <main>
          {/* 1. HERO SECTION */}
          <section className="min-h-[100vh] leading-[1.1] md:leading-[1.1] flex flex-col justify-center px-6 md:px-12 pt-16 pb-16 md:pt-32 md:pb-24 border-b border-zinc-900 relative bg-black">
            <HeroBackground />
            <div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-900 hidden md:block z-0"></div>
            
            <div className="max-w-6xl w-full md:pl-20 mt-0 relative z-10">
              <h1 className="font-clash font-bold uppercase mb-8 md:mb-12 text-[10vw] sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.1] md:leading-[1.1] flex flex-col break-words w-full max-w-[100vw]"> 
                <div className="overflow-hidden">
                  <ScrollReveal variant="textReveal" delay={0.1}>
                    ALTA
                  </ScrollReveal>
                </div>
                <div className="overflow-hidden">
                  <ScrollReveal variant="textReveal" delay={0.15}>
                    COSTURA
                  </ScrollReveal>
                </div>
                <div className="overflow-hidden">
                  <ScrollReveal variant="textReveal" delay={0.2} className="text-white">
                    TECNOLÓGICA<span className="text-[#F5B700]">.</span>
                  </ScrollReveal>
                </div>
              </h1>

              <div className="overflow-hidden mb-12 md:mb-20 pt-4">
                <ScrollReveal delay={0.3}>
                  <p className="font-inter font-light text-zinc-300 text-xl md:text-2xl lg:text-3xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
                    Auditamos y reconstruimos infraestructuras <span className="text-[#F5B700]">obsoletas</span>. Transformamos negocios que pierden dinero en ecosistemas digitales de <span className="text-[#F5B700]">alto rendimiento</span>.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.8}>
                <ContactTrigger className="inline-block cursor-pointer">
                  <button type="button" className="rings-btn">
                    <i></i><i></i><i></i>
                    <span>Inicia la Auditoría</span>
                    <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  </button>
                </ContactTrigger>
              </ScrollReveal>
            </div>
            
            {/* Link al Manifiesto */}
            <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20">
              <ScrollReveal delay={1.0}>
                <Link 
                  href="/manifiesto"
                  className="relative inline-block text-[#888888] font-clash font-bold text-[10px] md:text-xs pb-1 group transition-colors hover:text-white whitespace-nowrap" 
                >
                  DOC.00 / MANIFIESTO
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#F5B700] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.76,0,0.24,1]"></span>
                </Link>
              </ScrollReveal>
            </div>
          </section>

          {/* 2. SERVICES BLOCKS SECTION */}
          <section id="protocolo" className="bg-black relative">
            <div className="w-full flex flex-col">
              {homeServices.map((phase) => (
                <HomeServiceBlock key={phase.id} phase={phase as any} align={phase.align as 'left' | 'right'} />
              ))}
            </div>
          </section>

          {/* MARQUEE SEPARATOR */}
          <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-y border-zinc-900">
            <div className="marquee-content flex whitespace-nowrap w-max" style={{ animationDuration: '40s' }}>
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="marquee-item flex items-center justify-center min-w-max">
                  <span className="font-clash font-bold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
                    DELOBSOLETOALRENDIMIENTO
                  </span>
                  <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1 mx-4 md:mx-8" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* ECOSISTEMA COMPLETO */}
          <section id="hachazo" className="w-full bg-[#F5B700] relative overflow-hidden group transition-all duration-700 min-h-[45vh] border-b border-[#F5B700]">
            {/* Marquee/Scanner background effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <div className="w-full h-[2px] bg-black absolute top-0 animate-[scan_4s_linear_infinite]"></div>
                <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
            </div>

            <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 w-full flex flex-col justify-center min-h-[45vh] pointer-events-none max-w-7xl mx-auto">
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 relative z-20">
                  
                  {/* LEFT SIDE: TEXT AND BUTTON */}
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6 md:gap-8 transform transition-transform duration-700 ease-out pointer-events-auto">
                      <h2 className="font-clash font-semibold uppercase text-4xl sm:text-5xl md:text-5xl lg:text-[4.5rem] leading-[1] text-black tracking-normal"> 
                        ECOSISTEMA<br/>COMPLETO
                      </h2>
                      <p className="font-inter font-normal text-black text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
                        Identidad visual, plataforma web y automatización con IA. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día.
                      </p>
                      <div className="mt-4">
                        <ContactTrigger className="inline-block cursor-pointer">
                          <button type="button" className="rings-btn black group/btn">
                            <i></i><i></i><i></i>
                            <span>Solicitar Acceso</span>
                            <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                          </button>
                        </ContactTrigger>
                      </div>
                  </div>
                  
                  {/* RIGHT SIDE SPACE FOR CLAUDE ICON */}
                  <div className="w-full md:w-1/2 flex justify-end items-center pointer-events-auto min-h-[200px]">
                      {/* Claude's icon will go here */}
                  </div>

                </div>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer id="footer" className="bg-black border-t border-zinc-900 pt-12 pb-6 px-6 md:px-12 overflow-hidden">
          <div className="w-full flex flex-row justify-between items-center gap-6 md:gap-8">
            
            {/* Footer Logo / Isotype */}
            <div className="w-[40vw] md:flex-1 md:w-full flex justify-start pb-0">
              <a href="#" aria-label="Volver al inicio" className="w-full md:w-[20vw] max-w-[150px] md:max-w-[300px] text-white cursor-pointer block">
                <svg viewBox="0 0 406 348" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-500">
                  <path d="M252.188 140.625L236.562 117.188L377.188 0L405.996 41.9922L252.188 140.625Z" fill="#F5B700"/>
                  <path d="M170.166 55.3789C206.136 55.3789 235.921 57.9017 259.521 62.9473C266.593 64.4591 273.124 66.3798 279.114 68.71L242.746 99.0166C238.964 98.2723 234.871 97.6421 230.469 97.127C215.332 95.3366 195.231 94.4414 170.166 94.4414C143.636 94.4414 122.233 95.418 105.957 97.3711C89.8438 99.3242 77.5553 103.149 69.0918 108.846C60.6283 114.38 54.8503 122.68 51.7578 133.748C48.8281 144.816 47.2819 159.383 47.1191 177.449H284.912V154.012C284.912 145.974 284.261 138.894 282.959 132.771L321.891 107.806C327.186 120.229 329.834 135.631 329.834 154.012V214.314H47.1191C47.2819 235.148 48.7467 251.831 51.5137 264.363C54.2806 276.896 59.8145 286.336 68.1152 292.684C76.416 299.031 88.7858 303.263 105.225 305.379C121.826 307.332 143.88 308.309 171.387 308.309C196.126 308.309 216.064 307.82 231.201 306.844C246.501 305.867 258.057 303.751 265.869 300.496C273.844 297.078 279.215 292.033 281.982 285.359C284.749 278.686 286.133 269.734 286.133 258.504H329.834C329.834 279.5 326.66 296.02 320.312 308.064C314.128 320.109 304.606 328.898 291.748 334.432C278.89 339.965 262.451 343.465 242.432 344.93C222.575 346.557 198.893 347.371 171.387 347.371C139.974 347.371 113.281 345.743 91.3086 342.488C69.4987 339.396 51.8392 332.967 38.3301 323.201C24.9837 313.273 15.2181 298.462 9.0332 278.768C3.01107 259.074 0 232.788 0 199.91C0 168.009 2.92969 142.456 8.78906 123.25C14.8112 104.044 24.4954 89.5586 37.8418 79.793C51.1882 70.0273 68.6849 63.5169 90.332 60.2617C112.142 57.0065 138.753 55.3789 170.166 55.3789Z" fill="currentColor"/>
                </svg>
              </a>
            </div>

            {/* Footer Interactive Legal Block */}
            <div className="leading-[1.1] md:leading-[1.1] flex flex-col w-[50vw] md:w-[400px] font-mono z-10">
              <div className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] text-zinc-600 mb-4 md:mb-6 uppercase flex items-center gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 bg-[#F5B700]"></div>
                Protocolo Legal
              </div>
              
              <div className="leading-[1.1] md:leading-[1.1] flex flex-col border-t border-zinc-900">
                {[
                  { name: 'Aviso Legal', path: '/aviso-legal' },
                  { name: 'Privacidad', path: '/politica-de-privacidad' },
                  { name: 'Cookies', path: '/politica-de-cookies' }
                ].map((item) => (
                  <Link key={item.name} href={item.path} target="_blank" rel="noopener noreferrer" className="group flex justify-between items-center py-4 md:py-6 border-b border-zinc-900 transition-all duration-300 hover:border-zinc-800 cursor-pointer">
                    <span className="text-white font-normal group-hover:text-[#F5B700] group-hover:scale-[1.02] transform transition-all duration-300 origin-left uppercase text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em]">{item.name}</span>
                    <span className="text-zinc-500 group-hover:text-[#F5B700] transition-colors duration-300 text-base md:text-lg transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Full-width separator and copyright */}
          <div className="-mx-6 md:-mx-12 px-6 md:px-12 mt-16 pt-6 border-t border-zinc-900 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
            <p className="flex-1 text-center md:text-left order-2 md:order-1">© {new Date().getFullYear()} Espín Labs. Todos los derechos reservados.</p>
            <a href="mailto:contacto@espinlabs.com" className="flex-1 text-center hover:text-[#F5B700] transition-colors order-1 md:order-2 text-zinc-400 font-inter normal-case text-xs md:text-sm">
              contacto@espinlabs.com
            </a>
            <div className="flex-1 flex justify-center md:justify-end items-center gap-3 order-3">
              <span className="w-1 h-1 bg-[#F5B700]"></span>
              <p>Alta Costura Tecnológica</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
`;
fs.writeFileSync('src/app/page.tsx', content);
