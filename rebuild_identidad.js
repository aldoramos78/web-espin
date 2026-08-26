const fs = require('fs');

let dev = fs.readFileSync('src/app/desarrollo/page.tsx', 'utf8');

// 1. Title
dev = dev.replace(/DESARROLLO WEB/, 'IDENTIDAD Y');
dev = dev.replace(/DE ALTO RENDIMIENTO/, 'CREACIÓN DE MARCA');

// 2. Hero Desc
dev = dev.replace(
  /Sistemas a medida que no se caen ni cuando el tr[áa]fico se dispara\. Cero plantillas, cero plugins de terceros\./,
  'La imagen de tu negocio debe <span className="text-[#F5B700]">justificar tus precios</span>. Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten <span className="text-white font-normal">exclusividad, autoridad y confianza total</span> en tu sector.'
);

// 3. CTA
dev = dev.replace(/<span>Solicitar Auditoría<\/span>/, '<span>Solicitar Auditoría Visual</span>');
dev = dev.replace(/<span>Solicitar Auditor.a<\/span>/, '<span>Solicitar Auditoría Visual</span>');

// 4. Marquee - Replace text in Marquee
dev = dev.replace(/AUDITOR[ÍI]A FORENSE/g, 'AUTORIDAD VISUAL');
dev = dev.replace(/CERO ERRORES/g, 'CONFIANZA INMEDIATA');
dev = dev.replace(/SISTEMAS AUT[ÓO]NOMOS/g, 'PRECIOS JUSTIFICADOS');
dev = dev.replace(/ESC[ÁA]LALA SIN L[ÍI]MITES/g, 'POSICIONAMIENTO PREMIUM');
// If development had different marquee text:
dev = dev.replace(/RENDIMIENTO EXTREMO/g, 'POSICIONAMIENTO PREMIUM'); // Just in case

// Also ensure marquee uses SVG between items!
// The user asked for "Texto cíclico (separado por nuestro icono svg)"
// In desarrollo, the marquee does not use the SVG! So I must replace the HTML structure inside the marquee item.
const marqueeItemRegex = /<div key=\{i\} className="marquee-item flex items-center justify-center min-w-max">[\s\S]*?<\/div>/;
const newMarqueeItem = `<div key={i} className="marquee-item flex items-center justify-center min-w-max">
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  AUTORIDAD VISUAL
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
                <span className="font-michroma text-white text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8">
                  CONFIANZA INMEDIATA
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  PRECIOS JUSTIFICADOS
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
                <span className="font-michroma text-white text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8">
                  POSICIONAMIENTO PREMIUM
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
              </div>`;
dev = dev.replace(marqueeItemRegex, newMarqueeItem);

// 5. problemaData
dev = dev.replace(
  /title: "SISTEMA EXPUESTO", desc: "[^"]+"/,
  `title: "PERCEPCIÓN DEVALUADA", desc: "Si tu web, tus documentos o tu logotipo parecen baratos, el cliente asumirá que tu servicio también lo es, y te exigirá rebajas antes de empezar a hablar."`
);
dev = dev.replace(
  /title: "FUGAS DE CAPITAL", desc: "[^"]+"/,
  `title: "RUIDO Y CONFUSIÓN", desc: "Eres uno más en un mar de competidores que dicen y hacen exactamente lo mismo. No le estás dando a tu cliente ningún motivo visual para elegirte a ti."`
);
dev = dev.replace(
  /title: "DEVALUACI[ÓO]N DE MARCA", desc: "[^"]+"/,
  `title: "INCOHERENCIA CORPORATIVA", desc: "Cada red social, factura o presentación tiene un estilo, color y tipografía distintos. Eso transmite caos, desorganización y una grave falta de profesionalidad."`
);

// 6. pilaresData -> doctrinaData
dev = dev.replace(
  /title: "CIMIENTOS Y ESCALA", desc: "[^"]+"/,
  `title: "ESTÉTICA ESTRATÉGICA", desc: "No hacemos arte, hacemos negocios. Diseñamos con un único objetivo comercial: aumentar drásticamente el valor percibido de tu empresa."`
);
dev = dev.replace(
  /title: "BLINDAJE Y SEGURIDAD", desc: "[^"]+"/,
  `title: "CONSISTENCIA ABSOLUTA", desc: "Tu marca será exactamente la misma persona y transmitirá la misma autoridad en un documento impreso, en una videollamada o en tu web."`
);
dev = dev.replace(
  /title: "VELOCIDAD ABSOLUTA", desc: "[^"]+"/,
  `title: "LUJO TECNOLÓGICO", desc: "Aplicamos códigos visuales sobrios, minimalistas y de alta gama para que tu negocio respire estabilidad y dinero desde el primer segundo."`
);

// 7. PhaseRow data
dev = dev.replace(
  /title: "Auditor[íi]a Forense", desc: "[^"]+"/,
  `title: "Análisis de Posicionamiento", desc: "Estudiamos cómo te percibe el mercado hoy y definimos el espacio exacto que debes ocupar para cobrar lo que realmente vale tu servicio."`
);
dev = dev.replace(
  /title: "Demolici[óo]n y Arquitectura", desc: "[^"]+"/,
  `title: "Sistema Visual", desc: "Creamos logotipos, colores y tipografías que no solo son estéticos, sino que están diseñados psicológicamente para atraer a clientes de alto poder adquisitivo."`
);
dev = dev.replace(
  /title: "Despliegue y Pruebas de Estr[ée]s", desc: "[^"]+"/,
  `title: "Manual de Identidad (La Biblia)", desc: "Te entregamos las reglas estrictas de tu marca para que cualquier empleado sepa exactamente cómo usarla en el futuro sin destruir el diseño original."`
);
dev = dev.replace(
  /title: "Gobernanza Digital", desc: "[^"]+"/,
  `title: "Despliegue Corporativo", desc: "Aplicamos tu nueva armadura visual a todos los puntos de contacto de la empresa, desde la web hasta los documentos internos."`
);

// 8. Resultados Section
// Overwrite the content of the Resultados grid
const resultadosRegex = /<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">[\s\S]*?<\/section>/;
const newResultados = `<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
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
        </section>`;
dev = dev.replace(resultadosRegex, newResultados);

// Name
dev = dev.replace(/export default function DesarrolloPage/, 'export default function IdentidadPage');

// Title metadata
dev = dev.replace(/Desarrollo Web de Alto Rendimiento \| esp[íi]n/, 'Identidad y Creación de Marca | espín');
dev = dev.replace(/Construimos infraestructuras web inquebrantables, ultrarrápidas y optimizadas para escalar\./, 'Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten exclusividad, autoridad y confianza total.');


fs.writeFileSync('src/app/identidad/page.tsx', dev);
console.log('Rebuilt Identidad exactly as Desarrollo');
