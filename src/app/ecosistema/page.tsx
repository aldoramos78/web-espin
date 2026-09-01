import React from "react";
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
      icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12"><path d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" /></svg> 
    },
    { 
      letter: "/02", 
      title: "INFRAESTRUCTURA", 
      desc: "Levantamos tu plataforma web a medida. Rápida, segura y diseñada para convertir visitas en clientes sin caídas técnicas.", 
      icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg> 
    },
    { 
      letter: "/03", 
      title: "AUTOMATIZACIÓN", 
      desc: "Inyectamos asistentes virtuales y automatizamos tu gestión interna para que operes y vendas 24/7 sin sumar costes de plantilla.", 
      icon: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12"><path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-16.5v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg> 
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F5B700] selection:text-black font-inter overflow-x-hidden">
      <HeaderAndModal />

      <main>
        {/* 1. HERO SECTION */}
        <section id="hero" className="min-h-[100vh] leading-[1.1] md:leading-[1.1] flex flex-col justify-center px-6 md:px-12 pt-16 pb-16 md:pt-32 md:pb-24 border-b border-zinc-900 relative bg-black">
          <div className="absolute inset-0 z-0 bg-[url('/infraestructura-desarrollo-web-espin.webp')] bg-cover bg-center bg-no-repeat opacity-70 mix-blend-screen"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
          
          <div className="max-w-6xl w-full md:pl-20 mt-0 relative z-10">
            
            <div className="mb-8 md:mb-12">
              <ScrollReveal delay={0.1}>
                <Link href="/" className="inline-block">
                  <button type="button" className="rings-btn small">
                    <i></i><i></i><i></i>
                    <span>← Inicio</span>
                  </button>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.15}>
              <div className="font-space-mono text-[#F5B700] text-[10px] md:text-xs tracking-[0.2em] mb-6 uppercase">
                [MÓDULO 04] // ESTADO: ACTIVO // REPORTE TÉCNICO: ECOSISTEMA
              </div>
            </ScrollReveal>

 <h1 className="hero-stroke font-clash font-bold uppercase mb-8 md:mb-12 text-[10vw] sm:text-[8vw] md:text-6xl lg:text-[5rem] xl:text-[6rem] break-words leading-[1.1] md:leading-[1.1] flex flex-col w-full max-w-5xl border-l-0 md:border-l-[6px] border-[#F5B700] pl-0 md:pl-10"> 
              <div className="overflow-hidden">
                  <ScrollReveal variant="textReveal" delay={0.1} className="">
                    ECOSISTEMA
                  </ScrollReveal>
                </div>
                <div className="overflow-hidden pb-4">
                  <ScrollReveal variant="textReveal" delay={0.2} className="">
                    COMPLETO<span className="">.</span>
                  </ScrollReveal>
                </div>
            </h1>

            <div className="overflow-hidden mb-12 md:mb-20 pt-4">
              <ScrollReveal delay={0.3}>
                <p className="font-inter font-normal text-zinc-400 text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
                  <span className="text-[#F5B700]">Identidad</span> premium, <span className="text-[#F5B700]">infraestructura</span> web de alto rendimiento y <span className="text-[#F5B700]">automatización</span> con Inteligencia Artificial. Una intervención completa para dueños de negocio que no quieren parches, sino el control absoluto de su empresa.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.8}>
              <ContactTrigger servicio="ecosistema" className="inline-block cursor-pointer">
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
 className="relative inline-block text-[#888888] font-clash font-semibold text-[10px] md:text-xs pb-1 group transition-colors hover:text-white whitespace-nowrap" 
              >
                DOC.00 / MANIFIESTO
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#F5B700] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.76,0,0.24,1]"></span>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* 2. LA TRILOGÍA SECTION */}
        <section id="metodo" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
          <ScrollReveal variant="stagger" className="w-full">
            <div className="mb-10 md:mb-20 w-full md:w-[80%]">
              <div className="mb-10 md:mb-16 w-full">
                <ScrollReveal variant="slideRight">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
 <h2 className="font-clash font-light text-[4vw] sm:text-lg md:text-2xl lg:text-3xl text-[#F5B700] uppercase whitespace-nowrap"> 
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
                  className="p-6 md:p-8 lg:p-10 xl:p-14 border-b last:border-b-0 md:border-b-0 border-zinc-900 md:border-r group hover:bg-[#F5B700] transition-colors duration-700 leading-[1.1] md:leading-[1.1] flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative"
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
                  
 <h3 className="font-clash font-semibold text-2xl md:text-2xl lg:text-3xl xl:text-4xl uppercase mb-3 md:mb-6 lg: text-white group-hover:text-black relative z-10 group-hover:translate-x-2 transition-all duration-500"> 
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
        <section id="doctrina" className="px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
          <ScrollReveal variant="stagger" className="w-full">
            <div className="mb-10 md:mb-20 w-full md:w-[80%]">
              <div className="mb-10 md:mb-16 w-full">
                <ScrollReveal variant="slideRight">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
 <h2 className="font-clash font-light text-[4vw] sm:text-lg md:text-2xl lg:text-3xl text-[#F5B700] uppercase whitespace-nowrap"> 
                      02 / EL ESCUDO
                    </h2>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="w-full max-w-5xl leading-[1.1] md:leading-[1.1] flex flex-col items-start text-left mt-12 md:mt-24">
              <ScrollReveal>
 <h2 className="font-clash font-semibold text-[7vw] sm:text-3xl md:text-5xl lg:text-[4rem] text-white mb-8 md:mb-12 uppercase break-words"> 
                  GOBERNANZA Y MANTENIMIENTO <span className="text-[#F5B700]">OBLIGATORIO</span>.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-inter text-zinc-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
                  No entregamos tecnología para luego desaparecer. Este ecosistema incluye un seguro a todo riesgo continuo. Nos encargamos mensualmente de la seguridad, las actualizaciones y la evolución de tu Inteligencia Artificial para que tú solo te centres en dirigir.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. CIERRE Y CTA FINAL */}
        <section id="casos" className="px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32 bg-black relative">
          <ScrollReveal variant="stagger" className="w-full">
            <div className="mb-10 md:mb-20 w-full md:w-[80%]">
              <div className="mb-10 md:mb-16 w-full">
                <ScrollReveal variant="slideRight">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
 <h2 className="font-clash font-light text-[4vw] sm:text-lg md:text-2xl lg:text-3xl text-[#F5B700] uppercase whitespace-nowrap"> 
                      03 / LA DECISIÓN
                    </h2>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="w-full max-w-6xl leading-[1.1] md:leading-[1.1] flex flex-col items-start text-left mt-12 md:mt-24">
            <ScrollReveal>
 <h2 className="font-clash font-semibold text-[7vw] sm:text-3xl md:text-5xl lg:text-[4rem] text-white mb-8 md:mb-12 uppercase break-words"> 
                DELEGA LA TECNOLOGÍA.<br /> <span className="text-[#F5B700]">LIDERA</span> TU MERCADO.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-inter font-light text-zinc-400 text-lg md:text-xl lg:text-2xl leading-relaxed mb-16 max-w-3xl">
                Operamos con un número muy limitado de clientes para garantizar un nivel de exigencia absoluto.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <ContactTrigger servicio="ecosistema" className="inline-block cursor-pointer">
                <button type="button" className="rings-btn">
                  <i></i><i></i><i></i>
                  <span>Hablar con un Consultor</span>
                  <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </button>
              </ContactTrigger>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* MARQUEE SEPARATOR (Above footer) */}
      <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-t border-zinc-900">
        <div className="marquee-content flex whitespace-nowrap w-max" style={{ animationDuration: '60s' }}>
          {[1,2,3,4].map((i) => (
            <div key={i} className="marquee-item flex items-center justify-center min-w-max">
 <span className="font-clash font-semibold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
                INTERVENCIÓN TOTAL
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
 <span className="font-clash font-semibold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
                CERO PARCHES
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
 <span className="font-clash font-semibold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
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
