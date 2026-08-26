const fs = require('fs');

let code = fs.readFileSync('src/app/identidad/page.tsx', 'utf8');

// 1. Fix Hero section to exactly match desarrollo
const heroRegex = /<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden border-b border-zinc-900 min-h-\[90vh\] flex items-center">[\s\S]*?<\/section>/;
const fixedHero = `<section className="min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-16 pb-16 md:pt-32 md:pb-24 border-b border-zinc-900 relative bg-black">
          <HeroBackground />
          <div className="max-w-6xl w-full md:pl-20 mt-0 relative z-10">
            <h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[8.5vw] sm:text-[7.5vw] md:text-[6vw] lg:text-[4.5vw] break-words leading-[1.05] md:leading-[1.05] flex flex-col">
              <div className="overflow-hidden">
                <ScrollReveal variant="textReveal" delay={0.1} className="text-white">
                  IDENTIDAD Y
                </ScrollReveal>
              </div>
              <div className="overflow-hidden pb-4">
                <ScrollReveal variant="textReveal" delay={0.2} className="text-[#F2EFE9]">
                  CREACIÓN DE MARCA<span className="text-[#F5B700]">.</span>
                </ScrollReveal>
              </div>
            </h1>

            <div className="overflow-hidden mb-12 md:mb-20 pt-4">
              <ScrollReveal delay={0.3}>
                <p className="font-inter font-normal text-zinc-400 text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
                  La imagen de tu negocio debe <span className="text-[#F5B700]">justificar tus precios</span>. Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten <span className="text-white font-normal">exclusividad, autoridad y confianza total</span> en tu sector.
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
        </section>`;

code = code.replace(heroRegex, fixedHero);

// 2. Remove old Marquee section
const oldMarqueeRegex = /\{\/\* 2\. MARQUEE SECTION \*\/\}\s*<section className="py-6 md:py-8 border-b border-zinc-900 overflow-hidden bg-\[#F5B700\] relative">[\s\S]*?<\/section>/;
code = code.replace(oldMarqueeRegex, '');

// 3. Add new Marquee exactly at the bottom of the main
const newMarquee = `{/* MARQUEE SEPARATOR (Above footer) */}
        <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-t border-zinc-900">
          <div className="marquee-content flex whitespace-nowrap w-max" style={{ animationDuration: '60s' }}>
            {[1,2,3,4].map((i) => (
              <div key={i} className="marquee-item flex items-center justify-center min-w-max">
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
              </div>
            ))}
          </div>
        </div>`;

code = code.replace(/<\/main>/, `</main>\n        ${newMarquee}`);

// 4. Fix PROBLEMA hover states
const oldHoverRegex = /className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group transition-colors duration-700 flex flex-col min-h-\[220px\] md:min-h-\[400px\] overflow-hidden relative hover:bg-zinc-900"[\s\S]*?<h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight relative z-10 group-hover:translate-x-2 transition-transform duration-500 text-white">[\s\S]*?<p className="font-inter font-normal leading-relaxed mt-4 text-base md:text-lg lg:text-lg transition-colors duration-700 relative z-10 text-zinc-400 group-hover:text-zinc-300">/g;

code = code.replace(/<div\s+key=\{i\}\s+className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group transition-colors duration-700 flex flex-col min-h-\[220px\] md:min-h-\[400px\] overflow-hidden relative hover:bg-zinc-900"/g, 
  `<div key={i} className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group hover:bg-[#F5B700] transition-colors duration-700 flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative"`
);

code = code.replace(/<div className="h-px w-8 transform origin-left transition-all duration-500 group-hover:scale-x-\[2\.5\] bg-\[#F5B700\]"><\/div>/g,
  `<div className="h-px w-8 bg-[#F5B700] group-hover:bg-black transform origin-left transition-all duration-500 group-hover:scale-x-[2.5]"></div>`
);

code = code.replace(/className="transform transition-all duration-700 ease-\[0\.16,1,0\.3,1\] group-hover:translate-x-12 text-\[#F5B700\]"/g,
  `className="text-[#F5B700] group-hover:text-black transform transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-12"`
);

code = code.replace(/className="font-space-mono text-xs md:text-sm mt-2 transition-colors duration-700 text-zinc-600 group-hover:text-zinc-400"/g,
  `className="font-space-mono text-xs md:text-sm text-zinc-600 group-hover:text-black mt-2 transition-colors duration-700"`
);

code = code.replace(/<h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight relative z-10 group-hover:translate-x-2 transition-transform duration-500 text-white">/g,
  `<h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight text-white group-hover:text-black relative z-10 group-hover:translate-x-2 transition-all duration-500">`
);

code = code.replace(/<p className="font-inter font-normal leading-relaxed mt-4 text-base md:text-lg lg:text-lg transition-colors duration-700 relative z-10 text-zinc-400 group-hover:text-zinc-300">/g,
  `<p className="font-inter font-normal text-zinc-400 leading-relaxed mt-4 text-base md:text-lg lg:text-lg group-hover:text-black transition-colors duration-700 relative z-10">`
);

fs.writeFileSync('src/app/identidad/page.tsx', code);
console.log('Fixed page');
