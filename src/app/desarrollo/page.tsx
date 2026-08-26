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
  title: 'Desarrollo Web de Alto Rendimiento | espín',
  description: 'Construimos infraestructuras web inquebrantables, ultrarrápidas y optimizadas para escalar.',
};

export default function EspinLanding() {
  const problemaData = [
    { letter: "/A", title: "SISTEMA EXPUESTO", desc: "Brechas de seguridad, plantillas web obsoletas, plugins de terceros vulnerados, enlaces rotos. Extirpamos tecnología vulnerable y desplegamos fortalezas digitales inquebrantables.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path strokeLinecap="round" strokeLinejoin="round" d="M13 8l-3 4h4l-2 5"/></svg> },
    { letter: "/B", title: "FUGAS DE CAPITAL", desc: "Un sistema lento, caído u obsoleto hace que tu cliente se vaya a la competencia. Optimizamos la velocidad de tu ecosistema para que la retención sea máxima.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 6a6 6 0 1 0 0 12M5 10h8M5 14h8" /></svg> },
    { letter: "/C", title: "DEVALUACIÓN DE MARCA", desc: "Una interfaz anticuada proyecta decadencia. Nuestra imagen digital es la puerta de entrada a nuestra casa. Reconstruimos tu presencia digital para blindar tu autoridad.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7l6 6 4-4 8 8M21 17v-6M21 17h-6" /></svg> },
  ];

  const pilaresData = [
    { letter: "P.01", title: "CIMIENTOS Y ESCALA", desc: "No solo intervenimos empresas consolidadas con ecosistemas desfasados. Acompañamos a nuevos negocios a nacer desde el día cero con una infraestructura digital inquebrantable.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" /></svg> },
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
                [MÓDULO 01] // ESTADO: ACTIVO // REPORTE TÉCNICO: DESARROLLO
              </div>
            </ScrollReveal>

 <h1 className="hero-stroke font-clash font-bold uppercase mb-8 md:mb-12 text-[10vw] sm:text-[8vw] md:text-6xl lg:text-[5rem] xl:text-[6rem] break-words leading-[1.1] md:leading-[1.1] flex flex-col w-full max-w-5xl border-l-0 md:border-l-[6px] border-[#F5B700] pl-0 md:pl-10"> 
                <div className="overflow-hidden">
                    <ScrollReveal variant="textReveal" delay={0.1} className="">
                      DESARROLLO WEB
                    </ScrollReveal>
                  </div>
                  <div className="overflow-hidden pb-4">
                    <ScrollReveal variant="textReveal" delay={0.2} className="">
                      DE ALTO RENDIMIENTO<span className="">.</span>
                    </ScrollReveal>
                  </div>
              </h1>

              <div className="overflow-hidden mb-12 md:mb-20 pt-4">
                <ScrollReveal delay={0.3}>
                  
                  <p className="font-inter font-normal text-zinc-400 text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
                    El <span className="text-[#F5B700]">motor</span> digital de tu empresa. Cero errores, máxima <span className="text-[#F5B700]">seguridad</span> y un rendimiento diseñado exclusivamente para blindar tus <span className="text-[#F5B700]">ventas</span>.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.8}>
                <ContactTrigger className="inline-block cursor-pointer">
                  <button type="button" className="rings-btn">
                    <i></i><i></i><i></i>
                    <span>Solicitar Auditoría Web</span>
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
          <section id="diagnostico" className="px-6 md:px-12 pt-16 pb-10 md:pt-24 md:pb-20 bg-black relative">
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

          {/* 3. PROTOCOLO SECTION */}
          <section id="metodo" className="px-6 md:px-12 pt-12 pb-0 md:pt-16 md:pb-0 bg-black">
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
                  { id: "01", title: "Auditoría Forense", desc: "Radiografía exacta de tus cuellos de botella operativos. Detectamos dónde falla tu sistema actual y por dónde se está fugando el capital de tu empresa." },
                  { id: "02", title: "Demolición y Arquitectura", desc: "Eliminamos los sistemas inestables que frenan tu negocio. Desplegamos tecnología a medida, rápida y segura, diseñada para que operes en automático y sin caídas de servidor." },
                                    { id: "03", title: "Gobernanza Digital", desc: "No entregamos software huérfano. Aplicamos un 'Seguro a Todo Riesgo Tecnológico': mantenimiento, protección y evolución continua mensual." },
                ].map((phase, i) => (
                  <PhaseRow phase={phase} key={phase.id} isLast={i === 2} />
                ))}
              </div>
            </div>
          </section>
          
          {/* 4. PILARES SECTION */}
          <section id="doctrina" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
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
                    className="p-6 md:p-8 lg:p-10 xl:p-14 border-b last:border-b-0 md:border-b-0 border-zinc-900 md:border-r group transition-colors duration-700 leading-[1.1] md:leading-[1.1] flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative hover:bg-[#F5B700]"
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

                {/* TARJETA 1: FLOTA MARÍTIMA */}
                <ScrollReveal className="leading-[1.1] md:leading-[1.1] flex flex-col pr-0 md:pr-12 group">
                  {/* Contexto */}
                  <div className="mb-12">
                    <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-4 block">
                      Sector Tradicional
                    </span>
 <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 uppercase font-clash font-semibold group-hover:translate-x-2 transition-transform duration-500"> 
                      Flota Marítima Comercial
                    </h3>
                    <p className="font-inter font-normal text-zinc-400 text-base md:text-lg leading-relaxed">
                      Reestructuración completa de arquitectura web y creación de pasarela de reservas inquebrantable.
                    </p>
                  </div>

                  {/* La Métrica Dominante */}
                  <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
 <div className="text-6xl md:text-7xl text-white mb-2 font-clash font-semibold flex items-baseline"> 
                      <Counter from={0} to={99.9} decimals={1} />
                      <span className="text-[#F5B700] text-6xl md:text-7xl ml-1 font-inter tracking-normal">
                        %
                      </span>
                    </div>
                    <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                      Uptime Garantizado en Pico de Demanda
                    </div>
                  </div>

                  {/* Impacto Verificado */}
                  <div className="mt-auto">
                    <div className="h-[1px] w-full bg-zinc-900 mb-8"></div>
                    <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-6 block">
                      Impacto Verificado
                    </span>
                    <ul className="space-y-4 font-inter font-normal">
                      {["Blindaje antihackeo y seguridad de base de datos.", "Cero caídas de servidor durante temporada alta.", "Aumento drástico en la retención de reservas online."].map((item, idx) => (
                        <li key={idx} className="flex items-start text-zinc-400 text-sm">
                          <svg aria-hidden="true" className="w-4 h-4 text-[#F5B700] mr-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* TARJETA 2: RED DE LAVANDERÍAS */}
                <ScrollReveal className="leading-[1.1] md:leading-[1.1] flex flex-col pl-0 md:pl-12 mt-8 md:mt-0 group">
                  {/* Contexto */}
                  <div className="mb-12">
                    <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-4 block">
                      Sector Servicios B2B
                    </span>
 <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 uppercase font-clash font-semibold group-hover:translate-x-2 transition-transform duration-500"> 
                      Red de Lavanderías
                    </h3>
                    <p className="font-inter font-normal text-zinc-400 text-base md:text-lg leading-relaxed">
                      Sustitución de procesos manuales por un ecosistema digital automatizado para clientes corporativos.
                    </p>
                  </div>

                  {/* La Métrica Dominante */}
                  <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
 <div className="text-6xl md:text-7xl text-white mb-2 font-clash font-semibold flex items-baseline"> 
                      <Counter from={0} to={-60} decimals={0} />
                      <span className="text-[#F5B700] text-6xl md:text-7xl ml-1 font-inter tracking-normal">
                        %
                      </span>
                    </div>
                    <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                      Reducción de Carga Administrativa
                    </div>
                  </div>

                  {/* Impacto Verificado */}
                  <div className="mt-auto">
                    <div className="h-[1px] w-full bg-zinc-900 mb-8"></div>
                    <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-6 block">
                      Impacto Verificado
                    </span>
                    <ul className="space-y-4 font-inter font-normal">
                      {["Automatización 24/7 de reservas y flujos de cobro.", "Erradicación absoluta de errores humanos logísticos.", "Posicionamiento de marca como líder tecnológico del sector."].map((item, idx) => (
                        <li key={idx} className="flex items-start text-zinc-400 text-sm">
                          <svg aria-hidden="true" className="w-4 h-4 text-[#F5B700] mr-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                          <span>{item}</span>
                        </li>
                      ))}
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
                  AUDITORÍA FORENSE
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
 <span className="font-clash font-semibold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
                  DEMOLICIÓN Y ARQUITECTURA
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
 <span className="font-clash font-semibold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
                  AUTOMATIZACIÓN INTELIGENTE
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
 <span className="font-clash font-semibold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}> 
                  GOBERNANZA DIGITAL
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1 mx-4 md:mx-8" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
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
