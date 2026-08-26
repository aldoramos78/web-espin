const fs = require('fs');
const path = require('path');

// 1. ADD CSS FOR .rings-btn.black
let globalsPath = path.join('src', 'app', 'globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');

if (!globalsContent.includes('.rings-btn.black')) {
    globalsContent = globalsContent.replace(
        /\/\* ================= HERO STROKE ================= \*\//,
        `.rings-btn.black {
  background: black;
  color: #F5B700;
  border-color: black;
}
.rings-btn.black:hover {
  border-color: black;
  color: white;
}
.rings-btn.black i {
  border-color: rgba(0, 0, 0, 0.4);
}
.rings-btn.black .arr {
  stroke: #F5B700;
}
.rings-btn.black:hover .arr {
  stroke: white;
}

/* ================= HERO STROKE ================= */`
    );
    fs.writeFileSync(globalsPath, globalsContent);
}

// 2. RESTRUCTURE THE ECOSISTEMA COMPLETO SECTION IN PAGE.TSX
let pagePath = path.join('src', 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

const regex = /\{\/\*\s*3\.\s*EL HACHAZO \(DESPLIEGUE INTEGRAL\)\s*\*\/\}[\s\S]*?(?=\s*\{\/\*\s*FOOTER\s*\*\/)/;

const newSection = `{/* 3. EL HACHAZO (DESPLIEGUE INTEGRAL) */}
            <section id="hachazo" className="w-full bg-[#F5B700] relative overflow-hidden group transition-all duration-700 min-h-[45vh] border-b border-[#F5B700]">
                {/* Marquee/Scanner background effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                   <div className="w-full h-[2px] bg-black absolute top-0 animate-[scan_4s_linear_infinite]"></div>
                   <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
                </div>

                <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 w-full flex flex-col justify-center min-h-[45vh] pointer-events-none max-w-7xl mx-auto">
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 relative z-20">
                      
                      {/* LEFT SIDE: TEXT AND BUTTON */}
                      <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6 md:gap-8 transform group-hover:translate-x-2 transition-transform duration-700 ease-out pointer-events-auto">
                          <h2 className="font-clash font-semibold uppercase text-4xl sm:text-5xl md:text-5xl lg:text-[4.5rem] leading-[1] text-black tracking-normal"> 
                            ECOSISTEMA<br/>COMPLETO
                          </h2>
                          <p className="font-inter font-normal text-black text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
                            Identidad visual, plataforma web y automatización con IA. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día.
                          </p>
                          <div className="mt-4">
                            <ContactTrigger className="inline-block cursor-pointer">
                              <button type="button" className="rings-btn black group/btn">
                                <i></i><i></i><i></i>
                                <span>Solicitar Acceso</span>
                                <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                              </button>
                            </ContactTrigger>
                          </div>
                      </div>
                      
                      {/* RIGHT SIDE SPACE FOR CLAUDE ICON */}
                      <div className="w-full md:w-1/2 flex justify-end items-center pointer-events-auto min-h-[200px]">
                          {/* Claude's icon will go here */}
                      </div>

                    </div>
                </div>
            </section>

          </main>
`;

if (regex.test(pageContent)) {
    pageContent = pageContent.replace(regex, newSection);
    fs.writeFileSync(pagePath, pageContent);
    console.log("Successfully replaced the Ecosistema Completo section.");
} else {
    console.log("Regex did not match the Ecosistema Completo section in page.tsx.");
}
