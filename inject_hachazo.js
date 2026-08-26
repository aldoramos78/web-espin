const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

const newSection = `
            {/* 3. EL HACHAZO (DESPLIEGUE INTEGRAL) */}
            <section id="hachazo" className="w-full bg-[#F5B700] relative overflow-hidden group transition-all duration-700 min-h-[45vh] border-b border-[#F5B700]">
                {/* Marquee/Scanner background effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                   <div className="w-full h-[2px] bg-black absolute top-0 animate-[scan_4s_linear_infinite]"></div>
                   <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
                </div>

                <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 w-full flex flex-col justify-center min-h-[45vh] pointer-events-none max-w-7xl mx-auto">
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 relative z-20">
                      
                      {/* LEFT SIDE: TEXT AND BUTTON */}
                      <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6 md:gap-8 transform transition-transform duration-700 ease-out pointer-events-auto">
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
`;

if (!pageContent.includes('ECOSISTEMA COMPLETO')) {
    pageContent = pageContent.replace(
        /\{\/\*\s*MARQUEE SEPARATOR \(Above footer\)\s*\*\/\}/,
        newSection + '\n\n        {/* MARQUEE SEPARATOR (Above footer) */}'
    );
    fs.writeFileSync('src/app/page.tsx', pageContent);
    console.log("Injected El Hachazo");
} else {
    console.log("Already present");
}
