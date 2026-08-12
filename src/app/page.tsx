import React from "react";
import Link from "next/link";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { PhaseRow } from "@/components/ui/PhaseRow";
import { HeaderAndModal } from "@/components/ui/HeaderAndModal";
import { PreloaderManager } from "@/components/ui/PreloaderManager";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Counter } from "@/components/ui/Counter";
import { ContactTrigger } from "@/components/ui/ContactTrigger";

export default function EspinLanding() {
  const dolorData = [
    { letter: "/A", title: "SISTEMA EXPUESTO", desc: "Brechas de seguridad, plantillas web obsoletas, plugins de terceros vulnerados, enlaces rotos. Extirpamos tecnología vulnerable y desplegamos fortalezas digitales inquebrantables.", icon: <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path strokeLinecap="round" strokeLinejoin="round" d="M13 8l-3 4h4l-2 5"/></svg> },
    { letter: "/B", title: "FUGAS DE CAPITAL", desc: "Un sistema lento, caído u obsoleto hace que tu cliente se vaya a la competencia. Optimizamos la velocidad de tu ecosistema para que la retención sea máxima.", icon: <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 6a6 6 0 1 0 0 12M5 10h8M5 14h8" /></svg> },
    { letter: "/C", title: "DEVALUACIÓN DE MARCA", desc: "Una interfaz anticuada proyecta decadencia. Nuestra imagen digital es la puerta de entrada a nuestra casa. Reconstruimos tu presencia digital para blindar tu autoridad.", icon: <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7l6 6 4-4 8 8M21 17v-6M21 17h-6" /></svg> },
  ];

  const pilaresData = [
    { letter: "P.01", title: "CIMIENTOS Y ESCALA", desc: "No solo intervenimos empresas consolidadas con ecosistemas desfasados. Acompañamos a nuevos negocios a nacer desde el día cero con una infraestructura digital inquebrantable.", icon: <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" /></svg> },
    { letter: "P.02", title: "SOCIOS, NO TÉCNICOS", desc: "Nuestro cliente no busca un informático para apagar fuegos. Entiende que el software es el motor principal de su rentabilidad y exige un partner tecnológico capaz de sostener y blindar su crecimiento a largo plazo.", icon: <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
    { letter: "P.03", title: "INGENIERÍA DE NEGOCIO", desc: "Cada línea de código, cada automatización con IA y cada arquitectura que desplegamos tiene un único objetivo innegociable: erradicar ineficiencias y aumentar tu beneficio.", icon: <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
  ];

  return (
    <>
      <PreloaderManager />
      
      <div className="min-h-screen bg-black text-white selection:bg-[#F5B700] selection:text-black font-inter overflow-x-hidden">
        
        <HeaderAndModal />

        <main>
          {/* 1. HERO SECTION */}
          <section className="min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-16 pb-16 md:pt-32 md:pb-24 border-b border-zinc-900 relative bg-black">
            <HeroBackground />
            <div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-900 hidden md:block z-0"></div>
            
            <div className="max-w-6xl w-full md:pl-20 mt-0 relative z-10">
              <h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[10.5vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.05] md:leading-[1.05] flex flex-col">
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
                  <ScrollReveal variant="textReveal" delay={0.2} className="text-white text-[9vw] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                    TECNOLÓGICA<span className="text-[#F5B700]">.</span>
                  </ScrollReveal>
                </div>
              </h1>

              <div className="overflow-hidden mb-12 md:mb-20 pt-4">
                <ScrollReveal delay={0.3}>
                  <p className="font-inter font-light text-zinc-400 text-lg md:text-2xl lg:text-3xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
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
          </section>

          {/* MARQUEE SEPARATOR */}
          <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-b border-zinc-900">
            <div className="marquee-content flex whitespace-nowrap w-max">
              {[1,2,3,4].map((i) => (
                <div key={i} className="marquee-item flex items-center justify-center min-w-max">
                  <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
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

          {/* 2. DOLOR SECTION */}
          <section id="diagnostico" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
            <ScrollReveal variant="stagger" className="w-full">
              <div className="mb-10 md:mb-20 w-full md:w-[80%]">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 md:w-16 h-[2px] bg-[#F5B700]"></div>
                  <span className="font-michroma text-[11px] md:text-sm text-[#F5B700] tracking-widest uppercase">01 / EL PROBLEMA</span>
                </div>
                <div className="overflow-hidden pt-4 -mt-4">
                  <ScrollReveal variant="textReveal" className="font-michroma uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6 text-white" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}>
                    EL COSTE REAL<br />
                    DE LA OBSOLESCENCIA<span className="text-[#F5B700]">.</span>
                  </ScrollReveal>
                </div>
                <div className="overflow-hidden pt-4 -mt-4">
                  <ScrollReveal delay={0.2}>
                    <p className="font-inter font-light text-zinc-400 text-base md:text-xl">
                      No es un problema de <span className="text-[#F5B700]">diseño</span>. Es un fallo crítico de <span className="text-[#F5B700]">infraestructura</span>.
                    </p>
                  </ScrollReveal>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
                {dolorData.map((p, i) => (
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
                    
                    <p className="font-inter font-light text-zinc-400 leading-relaxed mt-4 text-base md:text-lg lg:text-xl group-hover:text-black transition-colors duration-700 relative z-10">
                      {p.desc}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* 3. PROTOCOLO SECTION */}
          <section id="protocolo" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
            <div className="w-full">
              <div className="w-full md:w-[80%]">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 md:w-16 h-[2px] bg-[#F5B700]"></div>
                  <span className="font-michroma text-[11px] md:text-sm text-[#F5B700] tracking-widest uppercase">02 / EL MÉTODO</span>
                </div>
                <div className="overflow-hidden mb-10 md:mb-20 pt-6 -mt-6">
                  <ScrollReveal variant="stagger">
                    <ScrollReveal variant="textReveal" className="font-michroma uppercase tracking-tighter text-white" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)', lineHeight: 0.9 }}>
                      PROTOCOLO DE<br />
                      INTERVENCIÓN<span className="text-[#F5B700]">.</span>
                    </ScrollReveal>
                  </ScrollReveal>
                </div>
              </div>

              <div className="flex flex-col">
                {[
                  { id: "01", title: "Auditoría Forense", desc: "Radiografía exacta de tus cuellos de botella operativos. Detectamos dónde falla tu sistema actual y por dónde se está fugando el capital de tu empresa." },
                  { id: "02", title: "Demolición y Arquitectura", desc: "Eliminamos los sistemas inestables que frenan tu negocio. Desplegamos tecnología a medida, rápida y segura, diseñada para que operes en automático y sin caídas de servidor." },
                  { id: "03", title: "Automatización Inteligente", desc: "Integramos agentes IA para automatizar tus procesos. Tu empresa empieza a operar, responder y vender 24/7 sin depender de la intervención humana." },
                  { id: "04", title: "Gobernanza Digital", desc: "No entregamos software huérfano. Aplicamos un 'Seguro a Todo Riesgo Tecnológico': mantenimiento, protección y evolución continua mensual." },
                ].map((phase, i) => (
                  <PhaseRow phase={phase} key={phase.id} />
                ))}
              </div>
            </div>
          </section>
          
          {/* 4. PILARES SECTION */}
          <section id="pilares" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
            <ScrollReveal variant="stagger" className="w-full">
              <div className="w-full md:w-[80%]">
                <div className="flex items-center gap-4 mb-6 md:mb-8 pt-4 -mt-4">
                  <div className="w-10 md:w-16 h-[2px] bg-[#F5B700]"></div>
                  <span className="font-michroma text-[11px] md:text-sm text-[#F5B700] tracking-widest uppercase">03 / LA DOCTRINA</span>
                </div>
                <div className="overflow-hidden mb-10 md:mb-20 max-w-full">
                  <ScrollReveal variant="textReveal" className="font-michroma uppercase tracking-tighter leading-none text-white" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}>
                    LOS PILARES<span className="text-[#F5B700]">.</span>
                  </ScrollReveal>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
                {pilaresData.map((p, i) => (
                  <div 
                    key={i}
                    className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group transition-colors duration-700 flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative hover:bg-[#F5B700]"
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
                    
                    <h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight relative z-10 group-hover:translate-x-2 transition-all duration-500 text-white group-hover:text-black">
                      {p.title}
                    </h3>
                    
                    <p className="font-inter font-light leading-relaxed mt-4 text-base md:text-lg lg:text-xl transition-colors duration-700 relative z-10 text-zinc-400 group-hover:text-black">
                      {p.desc}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* 5. CASOS / RESULTADOS SECTION */}
          <section id="resultados" className="px-0 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
            <ScrollReveal variant="stagger" className="w-full px-6 md:px-0">
              <div className="w-full md:w-[80%]">
                <div className="flex items-center gap-4 mb-6 md:mb-8 pt-4 -mt-4">
                  <div className="w-10 md:w-16 h-[2px] bg-[#F5B700]"></div>
                  <span className="font-michroma text-[11px] md:text-sm text-[#F5B700] tracking-widest uppercase">04 / CASOS</span>
                </div>
                <div className="overflow-hidden mb-10 md:mb-16">
                  <ScrollReveal variant="textReveal" className="font-michroma uppercase tracking-tighter text-white" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)', lineHeight: 0.9 }}>
                    RESULTADOS<span className="text-[#F5B700]">.</span>
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
                <ScrollReveal className="flex flex-col pr-0 md:pr-12 group">
                  {/* Contexto */}
                  <div className="mb-12">
                    <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-4 block">
                      Sector Tradicional
                    </span>
                    <h3 className="text-xl md:text-2xl text-white mb-4 uppercase font-michroma group-hover:translate-x-2 transition-transform duration-500">
                      Flota Marítima Comercial
                    </h3>
                    <p className="font-inter font-light text-zinc-400 text-sm md:text-base leading-relaxed">
                      Reestructuración completa de arquitectura web y creación de pasarela de reservas inquebrantable.
                    </p>
                  </div>

                  {/* La Métrica Dominante */}
                  <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
                    <div className="text-6xl md:text-7xl text-white mb-2 font-michroma tracking-tighter flex items-baseline">
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
                    <ul className="space-y-4 font-inter font-light">
                      {["Blindaje antihackeo y seguridad de base de datos.", "Cero caídas de servidor durante temporada alta.", "Aumento drástico en la retención de reservas online."].map((item, idx) => (
                        <li key={idx} className="flex items-start text-zinc-400 text-sm">
                          <svg className="w-4 h-4 text-[#F5B700] mr-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* TARJETA 2: RED DE LAVANDERÍAS */}
                <ScrollReveal className="flex flex-col pl-0 md:pl-12 mt-8 md:mt-0 group">
                  {/* Contexto */}
                  <div className="mb-12">
                    <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-4 block">
                      Sector Servicios B2B
                    </span>
                    <h3 className="text-xl md:text-2xl text-white mb-4 uppercase font-michroma group-hover:translate-x-2 transition-transform duration-500">
                      Red de Lavanderías
                    </h3>
                    <p className="font-inter font-light text-zinc-400 text-sm md:text-base leading-relaxed">
                      Sustitución de procesos manuales por un ecosistema digital automatizado para clientes corporativos.
                    </p>
                  </div>

                  {/* La Métrica Dominante */}
                  <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
                    <div className="text-6xl md:text-7xl text-white mb-2 font-michroma tracking-tighter flex items-baseline">
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
                    <ul className="space-y-4 font-inter font-light">
                      {["Automatización 24/7 de reservas y flujos de cobro.", "Erradicación absoluta de errores humanos logísticos.", "Posicionamiento de marca como líder tecnológico del sector."].map((item, idx) => (
                        <li key={idx} className="flex items-start text-zinc-400 text-sm">
                          <svg className="w-4 h-4 text-[#F5B700] mr-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
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
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  AUDITORÍA FORENSE
                </span>
                <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  DEMOLICIÓN Y ARQUITECTURA
                </span>
                <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  AUTOMATIZACIÓN INTELIGENTE
                </span>
                <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  GOBERNANZA DIGITAL
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
            <div className="flex flex-col w-[50vw] md:w-[400px] font-mono z-10">
              <div className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] text-zinc-600 mb-4 md:mb-6 uppercase flex items-center gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 bg-[#F5B700]"></div>
                Protocolo Legal
              </div>
              
              <div className="flex flex-col border-t border-zinc-900">
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
          <div className="-mx-6 md:-mx-12 px-6 md:px-12 mt-16 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
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
