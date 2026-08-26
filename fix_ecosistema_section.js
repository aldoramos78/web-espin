const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Use a regular expression to replace the entire ECOSISTEMA COMPLETO section
const ecosistemaRegex = /\{\/\*\s*ECOSISTEMA COMPLETO\s*\*\/\}[\s\S]*?(?=\{\/\*\s*MARQUEE SEPARATOR\s*\*\/})/g;

const newEcosistema = `{/* ECOSISTEMA COMPLETO */}
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
                <h3 className="font-clash font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl uppercase mb-6 text-black transition-colors duration-500">
                  ECOSISTEMA<br/>COMPLETO
                </h3>
                <p className="font-inter font-light text-lg md:text-2xl text-black leading-relaxed max-w-3xl">
                  Identidad visual, plataforma web y automatización con IA. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día.
                </p>
                <div className="mt-8 z-30 pointer-events-auto">
                  <ContactTrigger className="inline-block cursor-pointer">
                    <button type="button" className="rings-btn black group/btn">
                      <i></i><i></i><i></i>
                      <span>Solicitar Acceso</span>
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

`;

content = content.replace(ecosistemaRegex, newEcosistema);

fs.writeFileSync('src/app/page.tsx', content);
