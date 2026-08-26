const fs = require('fs');

const code = `import React from "react";
import Link from "next/link";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { HeaderAndModal } from "@/components/ui/HeaderAndModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactTrigger } from "@/components/ui/ContactTrigger";
import { Footer } from "@/components/ui/Footer";

export const metadata = {
  title: 'Ecosistema Completo | espín',
  description: 'Identidad premium, infraestructura web de alto rendimiento y automatización con IA. Una intervención completa para el control absoluto de tu empresa.',
};

export default function EcosistemaPage() {
  const trilogiaData = [
    { 
      letter: "/01", 
      title: "IDENTIDAD", 
      desc: "Diseñamos desde cero o reconstruimos tu marca para que tu imagen justifique tus precios y transmita máxima autoridad.", 
      icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> 
    },
    { 
      letter: "/02", 
      title: "INFRAESTRUCTURA", 
      desc: "Levantamos tu plataforma web a medida. Rápida, segura y diseñada para convertir visitas en clientes sin caídas técnicas.", 
      icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg> 
    },
    { 
      letter: "/03", 
      title: "CEREBRO IA", 
      desc: "Inyectamos asistentes virtuales y automatizamos tu gestión interna para que operes y vendas 24/7 sin sumar costes de plantilla.", 
      icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg> 
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F5B700] selection:text-black font-inter overflow-x-hidden">
      <HeaderAndModal />

      <main>
        {/* 1. HERO SECTION */}
        <section className="min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-16 pb-16 md:pt-32 md:pb-24 border-b border-zinc-900 relative bg-black">
          <HeroBackground />
          
          <div className="max-w-6xl w-full md:pl-20 mt-0 relative z-10">
            <h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[8.5vw] sm:text-[7.5vw] md:text-[6vw] lg:text-[4.5vw] break-words leading-[1.05] md:leading-[1.05] flex flex-col">
              <div className="overflow-hidden">
                  <ScrollReveal variant="textReveal" delay={0.1} className="text-white">
                    ECOSISTEMA
                  </ScrollReveal>
                </div>
                <div className="overflow-hidden pb-4">
                  <ScrollReveal variant="textReveal" delay={0.2} className="text-[#F2EFE9]">
                    COMPLETO<span className="text-[#F5B700]">.</span>
                  </ScrollReveal>
                </div>
            </h1>

            <div className="overflow-hidden mb-12 md:mb-20 pt-4">
              <ScrollReveal delay={0.3}>
                <p className="font-inter font-normal text-zinc-400 text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
                  Identidad premium, infraestructura web de alto rendimiento y automatización con Inteligencia Artificial. Una intervención completa para dueños de negocio que no quieren parches, sino el control absoluto de su empresa.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.8}>
              <ContactTrigger className="inline-block cursor-pointer">
                <button type="button" className="rings-btn">
                  <i></i><i></i><i></i>
                  <span>Solicitar Intervención Total</span>
                  <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </button>
              </ContactTrigger>
            </ScrollReveal>
          </div>
          
          <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20">
            <ScrollReveal delay={1.0}>
              <Link 
                href="/manifiesto"
                className="relative inline-block text-[#888888] font-michroma text-[10px] md:text-xs tracking-widest pb-1 group transition-colors hover:text-white whitespace-nowrap"
              >
                DOC.00 / MANIFIESTO
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#F5B700] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.76,0,0.24,1]"></span>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* 2. LA TRILOGÍA SECTION */}
        <section id="trilogia" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
          <ScrollReveal variant="stagger" className="w-full">
            <div className="mb-10 md:mb-20 w-full md:w-[80%]">
              <div className="mb-10 md:mb-16 w-full">
                <ScrollReveal variant="slideRight">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                    <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                      01 / LA TRILOGÍA
                    </h2>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
              {trilogiaData.map((p, i) => (
                <div 
                  key={i}
                  className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group hover:bg-[#F5B700] transition-colors duration-700 flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative"
                >
                  <div className="flex justify-between items-start mb-6 md:mb-12 relative z-10 w-full">
                    <div className="flex items-center gap-6">
                      <div className="h-px w-8 bg-[#F5B700] group-hover:bg-black transform origin-left transition-all duration-500 group-hover:scale-x-[2.5]"></div>
                      {p.icon && (
                        <div className="text-[#F5B700] group-hover:text-black transform transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-12">
                          {p.icon}
                        </div>
                      )}
                    </div>
                    {p.letter && (
                      <span className="font-space-mono text-xs md:text-sm text-zinc-600 group-hover:text-black mt-2 transition-colors duration-700">{p.letter}</span>
                    )}
                  </div>
                  
                  <h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight text-white group-hover:text-black relative z-10 group-hover:translate-x-2 transition-all duration-500">
                    {p.title}
                  </h3>
                  
                  <p className="font-inter font-normal text-zinc-400 leading-relaxed mt-4 text-base md:text-lg lg:text-lg group-hover:text-black transition-colors duration-700 relative z-10">
                    {p.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 3. EL ESCUDO OPERATIVO */}
        <section id="escudo" className="px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
          <ScrollReveal variant="stagger" className="w-full">
            <div className="mb-10 md:mb-20 w-full md:w-[80%]">
              <div className="mb-10 md:mb-16 w-full">
                <ScrollReveal variant="slideRight">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                    <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                      02 / EL ESCUDO
                    </h2>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col md:text-center items-start md:items-center mt-12 md:mt-24">
              <ScrollReveal>
                <h3 className="font-michroma text-2xl md:text-4xl lg:text-5xl text-white mb-8 md:mb-12 uppercase leading-tight tracking-wide">
                  GOBERNANZA Y MANTENIMIENTO <span className="text-[#F5B700]">OBLIGATORIO</span>.
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-inter text-zinc-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
                  No entregamos tecnología para luego desaparecer. Este ecosistema incluye un <span className="text-white">seguro a todo riesgo continuo</span>. Nos encargamos mensualmente de la seguridad, las actualizaciones y la evolución de tu Inteligencia Artificial para que tú solo te centres en dirigir.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. CIERRE Y CTA FINAL */}
        <section id="cierre" className="px-6 md:px-12 pt-24 pb-24 md:pt-32 md:pb-32 bg-black relative">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <ScrollReveal>
              <h2 className="font-michroma text-[10vw] sm:text-6xl md:text-7xl lg:text-[6rem] text-[#F5B700] mb-8 leading-[1.1] tracking-tighter uppercase break-words w-full">
                DELEGA LA TECNOLOGÍA.<br />LIDERA TU MERCADO.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-inter font-light text-zinc-400 text-base md:text-xl lg:text-2xl leading-relaxed mb-16 max-w-2xl mx-auto">
                Operamos con un número muy limitado de clientes para garantizar un nivel de exigencia absoluto.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <ContactTrigger className="inline-block cursor-pointer">
                <button type="button" className="rings-btn">
                  <i></i><i></i><i></i>
                  <span>Hablar con un Consultor</span>
                  <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </button>
              </ContactTrigger>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* MARQUEE SEPARATOR (Above footer) */}
      <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-t border-zinc-900">
        <div className="marquee-content flex whitespace-nowrap w-max" style={{ animationDuration: '60s' }}>
          {[1,2,3,4].map((i) => (
            <div key={i} className="marquee-item flex items-center justify-center min-w-max">
              <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                INTERVENCIÓN TOTAL
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
              <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                CERO PARCHES
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
              <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                CONTROL ABSOLUTO
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
`

fs.writeFileSync('src/app/ecosistema/page.tsx', code);
console.log('Ecosistema page written');
