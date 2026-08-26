const fs = require('fs');

const fileContent = `import React from "react";
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

export default function IdentidadPage() {
  const problemaData = [
    { letter: "/A", title: "PERCEPCIÓN DEVALUADA", desc: "Si tu web, tus documentos o tu logotipo parecen baratos, el cliente asumirá que tu servicio también lo es, y te exigirá rebajas antes de empezar a hablar.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg> },
    { letter: "/B", title: "RUIDO Y CONFUSIÓN", desc: "Eres uno más en un mar de competidores que dicen y hacen exactamente lo mismo. No le estás dando a tu cliente ningún motivo visual para elegirte a ti.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { letter: "/C", title: "INCOHERENCIA CORPORATIVA", desc: "Cada red social, factura o presentación tiene un estilo, color y tipografía distintos. Eso transmite caos, desorganización y una grave falta de profesionalidad.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg> },
  ];

  const doctrinaData = [
    { letter: "P.01", title: "ESTÉTICA ESTRATÉGICA", desc: "No hacemos arte, hacemos negocios. Diseñamos con un único objetivo comercial: aumentar drásticamente el valor percibido de tu empresa.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { letter: "P.02", title: "CONSISTENCIA ABSOLUTA", desc: "Tu marca será exactamente la misma persona y transmitirá la misma autoridad en un documento impreso, en una videollamada o en tu web.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
    { letter: "P.03", title: "LUJO TECNOLÓGICO", desc: "Aplicamos códigos visuales sobrios, minimalistas y de alta gama para que tu negocio respire estabilidad y dinero desde el primer segundo.", icon: <svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
  ];

  return (
    <div className="min-h-screen bg-black font-inter selection:bg-[#F5B700] selection:text-black">
      <HeaderAndModal />
      <main>
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden border-b border-zinc-900 min-h-[90vh] flex items-center">
          <HeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-6xl w-full md:pl-20 mt-0 relative z-10">
              <h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[8.5vw] sm:text-[7.5vw] md:text-[6vw] lg:text-[4.5vw] break-words leading-[1.05] md:leading-[1.05] flex flex-col">
                <div className="overflow-hidden">
                    <ScrollReveal variant="textReveal" delay={0.1} className="text-white">
                      IDENTIDAD Y
                    </ScrollReveal>
                  </div>
                  <div className="overflow-hidden pb-4">
                    <ScrollReveal variant="textReveal" delay={0.2} className="text-[#F2EFE9]">
                      CREACIÓN DE MARCA
                    </ScrollReveal>
                  </div>
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12 md:mt-24">
                <div className="md:col-span-8 md:col-start-5">
                  <div className="overflow-hidden mb-12 md:mb-16 pt-2">
                    <ScrollReveal delay={0.4}>
                      <p className="font-inter font-light text-zinc-300 text-lg md:text-2xl max-w-3xl leading-relaxed md:leading-tight tracking-tight">
                        La imagen de tu negocio debe <span className="text-[#F5B700]">justificar tus precios</span>. Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten <span className="text-white font-normal">exclusividad, autoridad y confianza total</span> en tu sector.
                      </p>
                    </ScrollReveal>
                  </div>
                  
                  <ScrollReveal delay={0.5}>
                    <button 
                      onClick={() => document.dispatchEvent(new CustomEvent('open-contact-modal'))}
                      className="group flex items-center justify-between w-full md:w-auto border border-zinc-800 bg-zinc-900/50 hover:bg-[#F5B700] hover:border-[#F5B700] transition-all duration-500 rounded-full px-6 py-4 md:px-8 md:py-5 backdrop-blur-sm cursor-pointer"
                    >
                      <span className="font-space-mono text-sm md:text-base uppercase tracking-widest text-white group-hover:text-black transition-colors font-bold mr-8 md:mr-16">
                        Solicitar Auditoría Visual
                      </span>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-700 group-hover:border-black flex items-center justify-center transition-colors group-hover:bg-black">
                        <svg aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5 text-[#F5B700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </button>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MARQUEE SECTION */}
        <section className="py-6 md:py-8 border-b border-zinc-900 overflow-hidden bg-[#F5B700] relative">
          <div className="flex whitespace-nowrap marquee-container">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex items-center animate-marquee shrink-0">
                <span className="font-michroma text-xl md:text-2xl xl:text-3xl uppercase tracking-widest text-black mx-6 md:mx-10">AUTORIDAD VISUAL</span>
                <svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
                </svg>
                <span className="font-michroma text-xl md:text-2xl xl:text-3xl uppercase tracking-widest text-black mx-6 md:mx-10">CONFIANZA INMEDIATA</span>
                <svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
                </svg>
                <span className="font-michroma text-xl md:text-2xl xl:text-3xl uppercase tracking-widest text-black mx-6 md:mx-10">PRECIOS JUSTIFICADOS</span>
                <svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
                </svg>
                <span className="font-michroma text-xl md:text-2xl xl:text-3xl uppercase tracking-widest text-black mx-6 md:mx-10">POSICIONAMIENTO PREMIUM</span>
                <svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
                </svg>
              </div>
            ))}
          </div>
        </section>

        {/* 3. PROBLEMA SECTION */}
        <section id="problema" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
          <ScrollReveal variant="stagger" className="w-full">
            <div className="mb-10 md:mb-16 w-full">
              <ScrollReveal variant="slideRight">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                  <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                    01 / EL PROBLEMA
                  </h2>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
              {problemaData.map((p, i) => (
                <div 
                  key={i}
                  className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group transition-colors duration-700 flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative hover:bg-zinc-900"
                >
                  <div className="flex justify-between items-start mb-6 md:mb-12 relative z-10 w-full">
                    <div className="flex items-center gap-6">
                      <div className="h-px w-8 transform origin-left transition-all duration-500 group-hover:scale-x-[2.5] bg-[#F5B700]"></div>
                      {p.icon && (
                        <div className="transform transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-12 text-[#F5B700]">
                          {p.icon}
                        </div>
                      )}
                    </div>
                    {p.letter && (
                      <span className="font-space-mono text-xs md:text-sm mt-2 transition-colors duration-700 text-zinc-600 group-hover:text-zinc-400">{p.letter}</span>
                    )}
                  </div>
                  
                  <h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight relative z-10 group-hover:translate-x-2 transition-transform duration-500 text-white">
                    {p.title}
                  </h3>
                  
                  <p className="font-inter font-normal leading-relaxed mt-4 text-base md:text-lg lg:text-lg transition-colors duration-700 relative z-10 text-zinc-400 group-hover:text-zinc-300">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 4. MÉTODO SECTION */}
        <section id="metodo" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
          <div className="w-full">
            <div className="w-full md:w-[80%] mb-12">
              <div className="mb-10 md:mb-16 w-full">
                <ScrollReveal variant="slideRight">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                    <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                      02 / EL MÉTODO
                    </h2>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="flex flex-col">
              {[
                { id: "01", title: "Análisis de Posicionamiento", desc: "Estudiamos cómo te percibe el mercado hoy y definimos el espacio exacto que debes ocupar para cobrar lo que realmente vale tu servicio." },
                { id: "02", title: "Sistema Visual", desc: "Creamos logotipos, colores y tipografías que no solo son estéticos, sino que están diseñados psicológicamente para atraer a clientes de alto poder adquisitivo." },
                { id: "03", title: "Manual de Identidad (La Biblia)", desc: "Te entregamos las reglas estrictas de tu marca para que cualquier empleado sepa exactamente cómo usarla en el futuro sin destruir el diseño original." },
                { id: "04", title: "Despliegue Corporativo", desc: "Aplicamos tu nueva armadura visual a todos los puntos de contacto de la empresa, desde la web hasta los documentos internos." }
              ].map((phase, i) => (
                <PhaseRow phase={phase} key={phase.id} />
              ))}
            </div>
          </div>
        </section>
        
        {/* 5. DOCTRINA SECTION */}
        <section id="doctrina" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
          <ScrollReveal variant="stagger" className="w-full">
            <div className="mb-10 md:mb-16 w-full">
                <ScrollReveal variant="slideRight">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                    <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                      03 / LA DOCTRINA
                    </h2>
                  </div>
                </ScrollReveal>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
              {doctrinaData.map((p, i) => (
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
                  
                  <p className="font-inter font-normal leading-relaxed mt-4 text-base md:text-lg lg:text-lg transition-colors duration-700 relative z-10 text-zinc-400 group-hover:text-black">
                    {p.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 6. RESULTADOS SECTION */}
        <section id="resultados" className="px-0 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
          <ScrollReveal variant="stagger" className="w-full px-6 md:px-0">
            <div className="w-full md:w-[80%]">
              <div className="mb-10 md:mb-16 w-full">
                <ScrollReveal variant="slideRight">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                    <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                      04 / RESULTADOS
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
              <ScrollReveal className="flex flex-col pr-0 md:pr-12 group">
                <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
                  <div className="text-6xl md:text-7xl text-white mb-2 font-michroma tracking-tighter flex items-baseline">
                    <Counter from={0} to={100} decimals={0} />
                    <span className="text-[#F5B700] text-6xl md:text-7xl ml-1 font-inter tracking-normal">
                      %
                    </span>
                  </div>
                  <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                    AUTORIDAD BLINDADA
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-inter font-normal text-zinc-400 text-base md:text-lg leading-relaxed border-t border-zinc-900 pt-8">
                    Coherencia total en todos tus canales comerciales.
                  </p>
                </div>
              </ScrollReveal>

              {/* TARJETA 2 */}
              <ScrollReveal className="flex flex-col pl-0 md:pl-12 mt-8 md:mt-0 group">
                <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
                  <div className="text-6xl md:text-7xl text-white mb-2 font-michroma tracking-tighter flex items-baseline">
                    <span className="text-[#F5B700] text-6xl md:text-7xl mr-2 font-inter tracking-normal">+</span>
                    VALOR
                  </div>
                  <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                    AUMENTO DEL TICKET MEDIO
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-inter font-normal text-zinc-400 text-base md:text-lg leading-relaxed border-t border-zinc-900 pt-8">
                    Tus clientes dejan de discutir el precio cuando la percepción de tu empresa es indiscutiblemente premium.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </section>

        {/* 7. CONTACT TRIGGER */}
        <ContactTrigger />
      </main>
      <Footer />
    </div>
  );
}
`

fs.writeFileSync('src/app/identidad/page.tsx', fileContent);
console.log('Written');
