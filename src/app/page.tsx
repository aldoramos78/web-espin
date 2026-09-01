import React from "react";
import Link from "next/link";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { HomeServiceBlock } from "@/components/ui/HomeServiceBlock";
import { HeaderAndModal } from "@/components/ui/HeaderAndModal";
import { PreloaderManager } from "@/components/ui/PreloaderManager";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Counter } from "@/components/ui/Counter";
import { ContactTrigger } from "@/components/ui/ContactTrigger";

export default function EspinLanding() {
  const homeServices = [
    { 
      id: "01", 
      title: "Desarrollo Web de Alto Rendimiento", 
      desc: "Sistemas estáticos pierden dinero a cada segundo. Desplegamos infraestructuras web y aplicaciones ultrarrápidas, escalables y diseñadas exclusivamente para liderar tu mercado.", 
      link: "/desarrollo",
      align: "right",
      sysText: "[MÓDULO 01] // ESTADO: ACTIVO // REPORTE TÉCNICO: DESARROLLO"
    },
    { 
      id: "02", 
      title: "Agentes y Automatización", 
      desc: "Tareas mecánicas devoran tu margen de beneficio. Integramos IA en tus flujos de trabajo para que tu empresa opere, soporte y venda en piloto automático 24/7.", 
      link: "/agentes",
      align: "left",
      sysText: "[MÓDULO 02] // ESTADO: ACTIVO // REPORTE TÉCNICO: AGENTES"
    },
    { 
      id: "03", 
      title: "Identidad Visual y Marca", 
      desc: "El aspecto de tu empresa es tu primera criba. Diseñamos una identidad sólida, elegante y disruptiva que blinda tu autoridad.", 
      link: "/identidad",
      align: "right",
      sysText: "[MÓDULO 03] // ESTADO: ACTIVO // REPORTE TÉCNICO: IDENTIDAD"
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
            
            
            <div className="max-w-6xl w-full md:pl-20 mt-0 relative z-10">
              <h1 className="font-clash font-bold uppercase mb-8 md:mb-12 text-[10vw] sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8rem] leading-[1.1] md:leading-[1.1] flex flex-col whitespace-nowrap w-full"> 
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
                    <span>Solicitar Auditoría</span>
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

          {/* ECOSISTEMA COMPLETO */}
          <section id="hachazo" className="group block w-full bg-[#F5B700] border-b border-[#F5B700] relative overflow-hidden transition-all duration-700">
            {/* Marquee/Scanner background effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden z-0">
                <div className="w-full h-[2px] bg-black absolute top-0 animate-[scan_4s_linear_infinite]"></div>
                <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
            </div>

            {/* Container exactly matching HomeServiceBlock padding, max-w and flex structure */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 py-16 md:py-28 relative z-10 px-8 md:px-16 max-w-[100vw]">
              
              {/* Black Lateral Bar (Hover on desktop, fixed on mobile) */}
              <div className="absolute top-0 bottom-0 w-2 md:w-3 bg-black transform scale-y-100 md:scale-y-0 origin-top transition-transform duration-700 ease-[0.76,0,0.24,1] group-hover:scale-y-100 left-0"></div>

              {/* Text Content (w-7/12 on md, matching the 'Agentes' layout since we want text on the left) */}
              <div className="w-full md:w-7/12 flex flex-col relative z-20 items-start text-left">
                <Link href="/ecosistema" className="group/link block cursor-pointer">
                  <h3 className="font-clash font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.1] uppercase mb-6 text-black transition-colors duration-500 group-hover/link:opacity-80">
                    ECOSISTEMA<br/>COMPLETO
                  </h3>
                  <p className="font-inter font-light text-lg md:text-2xl text-black leading-relaxed max-w-3xl group-hover/link:opacity-80 transition-opacity">
                    Identidad visual, plataforma web y automatización con IA. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día.
                  </p>
                </Link>
                <div className="mt-8 z-30 pointer-events-auto">
                  <ContactTrigger servicio="ecosistema" className="inline-block cursor-pointer">
                    <button type="button" className="rings-btn black group/btn">
                      <i></i><i></i><i></i>
                      <span>Solicitar Ecosistema</span>
                      <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                    </button>
                  </ContactTrigger>
                </div>
              </div>

              {/* ICON (Mobile: absolute behind text, Desktop: 5/12 width aligned to right, just like 'Agentes' block) */}
              <div className="absolute inset-0 md:inset-auto md:relative w-full md:w-5/12 flex items-center justify-center -z-10 md:z-10 md:justify-end md:pr-12">
                <div className="w-[80vw] h-[80vw] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] text-black opacity-5 md:opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {/* ViewBox adjusted to 0 0 24 24 and circles scaled directly so it is PERFECTLY physically identical to the others which use 0 0 24 24 */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    {/* To make it size 16 inside 24x24 (matching the 16 height of fingerprint), scale everything up.
                        Original: cx=12, cy=8, r=5 (Height=16). It already perfectly fills a 16x17 area inside 24x24! 
                        If I leave it as 0 0 24 24, it will be EXACTLY the same mathematical size ratio as the others. */}
                    <circle cx="12" cy="7.5" r="5" />
                    <circle cx="8.5" cy="14" r="5" />
                    <circle cx="15.5" cy="14" r="5" />
                  </svg>
                </div>
              </div>

            </div>
          </section>


          {/* 5. CASOS / RESULTADOS SECTION (Migrado para AEO) */}
          <section id="casos" className="px-0 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
            <ScrollReveal variant="stagger" className="w-full px-6 md:px-0">
              <div className="w-full md:w-[80%]">
                <div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
 <h2 className="font-clash font-light text-[4vw] sm:text-lg md:text-2xl lg:text-3xl text-[#F5B700] uppercase whitespace-nowrap"> 
                        LA PRUEBA DEL RENDIMIENTO
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
                      RESPUESTA INMEDIATA
                    </div>
                  </div>

                  {/* Impacto Verificado */}
                  <div className="mt-auto">
                    <div className="h-[1px] w-full bg-zinc-900 mb-8"></div>
                    <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-6 block">
                      Impacto Verificado
                    </span>
                    <ul className="space-y-4 font-inter font-normal">
                      {["Retención absoluta de leads comerciales en cualquier franja horaria.", "Aumento del 40% en cierre de reservas sin intervención humana.", "Eliminación de cuellos de botella durante picos de demanda."].map((item, idx) => (
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
                      Operativa Interna
                    </h3>
                    <p className="font-inter font-normal text-zinc-400 text-base md:text-lg leading-relaxed">
                      Automatización de flujos de trabajo y tareas administrativas.
                    </p>
                  </div>

                  {/* La Métrica Dominante */}
                  <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
 <div className="text-6xl md:text-7xl text-white mb-2 font-clash font-semibold flex items-baseline"> 
                      <Counter from={0} to={-80} decimals={0} />
                      <span className="text-[#F5B700] text-6xl md:text-7xl ml-1 font-inter tracking-normal">
                        %
                      </span>
                    </div>
                    <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                      REDUCCIÓN DE CARGA ADMINISTRATIVA
                    </div>
                  </div>

                  {/* Impacto Verificado */}
                  <div className="mt-auto">
                    <div className="h-[1px] w-full bg-zinc-900 mb-8"></div>
                    <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-6 block">
                      Impacto Verificado
                    </span>
                    <ul className="space-y-4 font-inter font-normal">
                      {["Tu equipo vuelve a centrarse en tareas que generan ingresos reales.", "Sincronización automática de bases de datos y facturación al instante.", "Reducción de errores mecánicos a cero en flujos logísticos recurrentes."].map((item, idx) => (
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

          {/* MARQUEE SEPARATOR */}
          <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-y border-zinc-900">
            <div className="marquee-content flex whitespace-nowrap w-max" style={{ animationDuration: '40s' }}>
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="marquee-item flex items-center justify-center min-w-max">
                  <span className="font-clash font-bold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px #F5B700', color: 'transparent' }}> 
                    DELOBSOLETOALRENDIMIENTO
                  </span>
                  <span className="text-[#F5B700] text-3xl md:text-5xl lg:text-[4.5rem] font-bold mx-4 md:mx-8">*</span>
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
