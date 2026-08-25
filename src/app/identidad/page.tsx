import React from "react";
import Link from "next/link";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { PhaseRow } from "@/components/ui/PhaseRow";
import { HeaderAndModal } from "@/components/ui/HeaderAndModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Counter } from "@/components/ui/Counter";
import { ContactTrigger } from "@/components/ui/ContactTrigger";
import { Footer } from "@/components/ui/Footer";

export const metadata = {
  title: 'Identidad y Creación de Marca | espín',
  description: 'Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten exclusividad, autoridad y confianza total.',
};

export default function EspinLanding() {
  const problemaData = [
    { letter: "/A", title: "PERCEPCIÓN DEVALUADA", desc: "Si tu web, tus documentos o tu logotipo parecen baratos, el cliente asumirá que tu servicio también lo es, y te exigirá rebajas antes de empezar a hablar.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path strokeLinecap="round" strokeLinejoin="round" d="M13 8l-3 4h4l-2 5"/></svg> },
    { letter: "/B", title: "RUIDO Y CONFUSIÓN", desc: "Eres uno más en un mar de competidores que dicen y hacen exactamente lo mismo. No le estás dando a tu cliente ningún motivo visual para elegirte a ti.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 6a6 6 0 1 0 0 12M5 10h8M5 14h8" /></svg> },
    { letter: "/C", title: "INCOHERENCIA CORPORATIVA", desc: "Cada red social, factura o presentación tiene un estilo, color y tipografía distintos. Eso transmite caos, desorganización y una grave falta de profesionalidad.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7l6 6 4-4 8 8M21 17v-6M21 17h-6" /></svg> },
  ];

  const pilaresData = [
    { letter: "P.01", title: "ESTÉTICA ESTRATÉGICA", desc: "No hacemos arte, hacemos negocios. Diseñamos con un único objetivo comercial: aumentar drásticamente el valor percibido de tu empresa.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" /></svg> },
    { letter: "P.02", title: "SOCIOS, NO TÉCNICOS", desc: "Nuestro cliente no busca un informático para apagar fuegos. Entiende que el software es el motor principal de su rentabilidad y exige un partner tecnológico capaz de sostener y blindar su crecimiento a largo plazo.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
    { letter: "P.03", title: "INGENIERÍA DE NEGOCIO", desc: "Cada línea de código, cada optimización de servidor y cada arquitectura que desplegamos tiene un único objetivo innegociable: erradicar ineficiencias y aumentar tu beneficio.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
  ];

  return (
    <>
      
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
                <Link href="/#hero" className="inline-block">
                  <button type="button" className="rings-btn small">
                    <i></i><i></i><i></i>
                    <span>← Inicio</span>
                  </button>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.15}>
              <div className="font-space-mono text-[#F5B700] text-[10px] md:text-xs tracking-[0.2em] mb-6 uppercase">
                [MÓDULO 03] // ESTADO: ACTIVO // REPORTE TÉCNICO: IDENTIDAD
              </div>
            </ScrollReveal>

 <h1 className="hero-stroke font-clash font-bold uppercase mb-8 md:mb-12 text-[10vw] sm:text-[8vw] md:text-6xl lg:text-[5rem] xl:text-[6rem] break-words leading-[1.1] md:leading-[1.1] flex flex-col w-full max-w-5xl border-l-0 md:border-l-[6px] border-[#F5B700] pl-0 md:pl-10"> 
                <div className="overflow-hidden">
                    <ScrollReveal variant="textReveal" delay={0.1} className="">
                      IDENTIDAD Y
                    </ScrollReveal>
                  </div>
                  <div className="overflow-hidden pb-4">
                    <ScrollReveal variant="textReveal" delay={0.2} className="">
                      CREACIÓN DE MARCA<span className="">.</span>
                    </ScrollReveal>
                  </div>
              </h1>

              <div className="overflow-hidden mb-12 md:mb-20 pt-4">
                <ScrollReveal delay={0.3}>
                  
                  <p className="font-inter font-normal text-zinc-400 text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
                    La <span className="text-[#F5B700]">imagen</span> de tu negocio debe justificar tus precios. Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten <span className="text-[#F5B700]">exclusividad</span>, autoridad y <span className="text-[#F5B700]">confianza</span> total en tu sector.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.8}>
                <ContactTrigger className="inline-block cursor-pointer">
                  <button type="button" className="rings-btn">
                    <i></i><i></i><i></i>
                    <span>Solicitar Auditoría Visual</span>
                    <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  </button>
                </ContactTrigger>
              </ScrollReveal>
            </div>
            
            {/* Link al Manifiesto (Esquina inferior derecha) */}
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

          {/* 2. PROBLEMA SECTION */}
          <section id="diagnostico" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
            <ScrollReveal variant="stagger" className="w-full">
              <div className="mb-10 md:mb-20 w-full md:w-[80%]">
                <div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
 <h2 className="font-clash font-light text-[4vw] sm:text-lg md:text-2xl lg:text-3xl text-[#F5B700] uppercase whitespace-nowrap"> 
                        01 / EL PROBLEMA
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
                {problemaData.map((p, i) => (
                  <div 
                    key={i}
                    className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group hover:bg-[#F5B700] transition-colors duration-700 leading-[1.1] md:leading-[1.1] flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative"
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

          {/* 3. PROTOCOLO SECTION */}
          <section id="metodo" className="px-6 md:px-12 pt-16 pb-0 md:pt-24 md:pb-0 bg-black">
            <div className="w-full">
              <div className="w-full md:w-[80%]">
                <div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
 <h2 className="font-clash font-light text-[4vw] sm:text-lg md:text-2xl lg:text-3xl text-[#F5B700] uppercase whitespace-nowrap"> 
                        02 / EL MÉTODO
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              <div className="leading-[1.1] md:leading-[1.1] flex flex-col">
                {[
                  { id: "01", title: "Análisis de Posicionamiento", desc: "Estudiamos cómo te percibe el mercado hoy y definimos el espacio exacto que debes ocupar para cobrar lo que realmente vale tu servicio." },
                  { id: "02", title: "Sistema Visual", desc: "Creamos logotipos, colores y tipografías que no solo son estéticos, sino que están diseñados psicológicamente para atraer a clientes de alto poder adquisitivo." },
                                    { id: "03", title: "Despliegue Corporativo", desc: "Aplicamos tu nueva armadura visual a todos los puntos de contacto de la empresa, desde la web hasta los documentos internos." },
                ].map((phase, i) => (
                  <PhaseRow phase={phase} key={phase.id} isLast={i === 2} />
                ))}
              </div>
            </div>
          </section>
          
          {/* 4. PILARES SECTION */}
          <section id="doctrina" className="px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-32 bg-black border-b border-zinc-900 relative">
            <ScrollReveal variant="stagger" className="w-full">
              <div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
 <h2 className="font-clash font-light text-[4vw] sm:text-lg md:text-2xl lg:text-3xl text-[#F5B700] uppercase whitespace-nowrap"> 
                        03 / LA DOCTRINA
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
                {pilaresData.map((p, i) => (
                  <div 
                    key={i}
                    className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group transition-colors duration-700 leading-[1.1] md:leading-[1.1] flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative hover:bg-[#F5B700]"
                  >
                    <div className="flex justify-between items-start mb-6 md:mb-12 relative z-10 w-full">
                      <div className="flex items-center gap-6">
                        <div className="h-px w-8 transform origin-left transition-all duration-500 group-hover:scale-x-[2.5] bg-[#F5B700] group-hover:bg-black"></div>
                        {p.icon && (
                          <div className="transform transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-12 text-[#F5B700] group-hover:text-black">
                            {p.icon}
                          </div>
                        )}
                      </div>
                      {p.letter && (
                        <span className="font-space-mono text-xs md:text-sm mt-2 transition-colors duration-700 text-zinc-600 group-hover:text-black">{p.letter}</span>
                      )}
                    </div>
                    
 <h3 className="font-clash font-semibold text-2xl md:text-2xl lg:text-3xl xl:text-4xl uppercase mb-3 md:mb-6 lg: relative z-10 group-hover:translate-x-2 transition-all duration-500 text-white group-hover:text-black"> 
                      {p.title}
                    </h3>
                    
                    <p className="font-inter font-normal leading-relaxed mt-4 text-base md:text-lg lg:text-lg transition-colors duration-700 relative z-10 text-zinc-400 group-hover:text-black">
                      {p.desc}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* 5. CASOS / RESULTADOS SECTION */}
          <section id="casos" className="px-0 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
            <ScrollReveal variant="stagger" className="w-full px-6 md:px-0">
              <div className="w-full md:w-[80%]">
                <div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
 <h2 className="font-clash font-light text-[4vw] sm:text-lg md:text-2xl lg:text-3xl text-[#F5B700] uppercase whitespace-nowrap"> 
                        04 / CASOS
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="stagger" className="w-full px-6 md:px-0">
              {/* Grid de Resultados */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
              {/* Línea divisoria central (solo en desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-900 -translate-x-1/2"></div>

              {/* TARJETA 1 */}
              <ScrollReveal className="leading-[1.1] md:leading-[1.1] flex flex-col pr-0 md:pr-12 group">
                <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
 <div className="text-6xl md:text-7xl text-white mb-2 font-clash font-semibold flex items-baseline"> 
                    <Counter from={0} to={100} decimals={0} />
                    <span className="text-[#F5B700] text-6xl md:text-7xl ml-1 font-inter tracking-normal">
                      %
                    </span>
                  </div>
                  <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                    AUTORIDAD BLINDADA
                  </div>
                </div>
                
                {/* Impacto Verificado / Contexto */}
                <div className="mt-auto">
                  <div className="h-[1px] w-full bg-zinc-900 mb-8"></div>
                  <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-6 block">
                    Impacto Verificado
                  </span>
                  <ul className="space-y-4 font-inter font-normal">
                    <li className="flex items-start text-zinc-400 text-sm">
                      <svg aria-hidden="true" className="w-4 h-4 text-[#F5B700] mr-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                      <span>Coherencia total en todos tus canales comerciales.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* TARJETA 2 */}
              <ScrollReveal className="leading-[1.1] md:leading-[1.1] flex flex-col pl-0 md:pl-12 mt-8 md:mt-0 group">
                <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
 <div className="text-4xl sm:text-5xl md:text-7xl text-white mb-2 font-clash font-semibold flex items-baseline"> 
                    <span className="text-[#F5B700] text-4xl sm:text-5xl md:text-7xl mr-2 font-inter tracking-normal">+</span>
                    VALOR
                  </div>
                  <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                    AUMENTO DEL TICKET MEDIO
                  </div>
                </div>
                
                {/* Impacto Verificado / Contexto */}
                <div className="mt-auto">
                  <div className="h-[1px] w-full bg-zinc-900 mb-8"></div>
                  <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-6 block">
                    Impacto Verificado
                  </span>
                  <ul className="space-y-4 font-inter font-normal">
                    <li className="flex items-start text-zinc-400 text-sm">
                      <svg aria-hidden="true" className="w-4 h-4 text-[#F5B700] mr-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                      <span>Tus clientes dejan de discutir el precio cuando la percepción de tu empresa es indiscutiblemente premium.</span>
                    </li>
                  </ul>
                </div>
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
                  AUTORIDAD VISUAL
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
 <span className="font-clash font-semibold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
                  CONFIANZA INMEDIATA
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
 <span className="font-clash font-semibold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
                  PRECIOS JUSTIFICADOS
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
 <span className="font-clash font-semibold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
                  POSICIONAMIENTO PREMIUM
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

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
