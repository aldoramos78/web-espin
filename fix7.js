const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Flip Lobby Rows align
// To do this safely, I'll find the lobbyRows definition block.
// Row 1
page = page.replace(
  /id: "01",\s*title: "Desarrollo Web de Alto Rendimiento",\s*desc: "(.*?)",\s*align: "left",/s,
  'id: "01",\n      title: "Desarrollo Web de Alto Rendimiento",\n      desc: "$1",\n      align: "right",'
);
// Row 2
page = page.replace(
  /id: "02",\s*title: "Agentes y Automatización",\s*desc: "(.*?)",\s*align: "right",/s,
  'id: "02",\n      title: "Agentes y Automatización",\n      desc: "$1",\n      align: "left",'
);
// Row 3
page = page.replace(
  /id: "03",\s*title: "Identidad y Creación de Marca",\s*desc: "(.*?)",\s*align: "left",/s,
  'id: "03",\n      title: "Identidad y Creación de Marca",\n      desc: "$1",\n      align: "right",'
);

// 2. Ecosistema block redesign
const oldEcoBlock = `<div className="relative z-10 px-6 md:px-32 py-16 md:py-24 w-full flex flex-col md:flex-row items-center justify-between gap-12">
                      <div className="flex-1 transform group-hover:translate-x-4 transition-transform duration-700 ease-out text-center md:text-left">
                        <h2 className="font-michroma uppercase text-4xl md:text-6xl lg:text-[5.5rem] tracking-tighter mb-4 text-black leading-[1.1]">
                          ECOSISTEMA<br/>COMPLETO
                        </h2>
                      </div>
                      
                      <div className="flex-1 md:max-w-xl text-center md:text-right flex flex-col md:items-end transform group-hover:-translate-x-2 transition-transform duration-700 ease-out">
                        <p className="font-inter font-medium text-black text-xl md:text-3xl leading-relaxed mb-8 md:mb-12">
                          Identidad visual, plataforma web y automatización con IA. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día.
                        </p>
                        
                        <button type="button" className="relative inline-flex items-center gap-4 px-8 py-4 border border-black rounded-full font-michroma text-xs tracking-[0.2em] uppercase text-black hover:bg-black hover:text-[#F5B700] transition-colors duration-500">
                        <span>Solicitar Acceso</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </button>
                    </div>
                  </div>`;

// New block with button below and smaller padding
const newEcoBlock = `<div className="relative z-10 px-6 md:px-32 py-12 md:py-16 w-full flex flex-col items-center gap-10 md:gap-16">
                      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1 transform group-hover:translate-x-4 transition-transform duration-700 ease-out text-center md:text-left">
                          <h2 className="font-michroma uppercase text-4xl md:text-6xl lg:text-[5.5rem] tracking-tighter mb-0 text-black leading-[1.1]">
                            ECOSISTEMA<br/>COMPLETO
                          </h2>
                        </div>
                        
                        <div className="flex-1 md:max-w-xl text-center md:text-right flex flex-col md:items-end transform group-hover:-translate-x-2 transition-transform duration-700 ease-out">
                          <p className="font-inter font-medium text-black text-xl md:text-3xl leading-relaxed mb-0">
                            Identidad visual, plataforma web y automatización con IA. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-center w-full transform group-hover:translate-y-[-4px] transition-transform duration-700 ease-out">
                        <button type="button" className="relative inline-flex items-center gap-4 px-10 py-5 border border-black rounded-full font-michroma text-xs tracking-[0.2em] uppercase text-black hover:bg-black hover:text-[#F5B700] transition-colors duration-500">
                          <span>Solicitar Acceso</span>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </button>
                      </div>
                  </div>`;

// Because of encoding issues (the file might have special chars replacing accents), let's use a regex replace for the whole div
// I will build a regex that captures the paragraph text to preserve any encoding quirks.

const regexEco = /<div className="relative z-10 px-6 md:px-32 py-16 md:py-24 w-full flex flex-col md:flex-row items-center justify-between gap-12">[\s\S]*?ECOSISTEMA<br\/>COMPLETO[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<button[^>]*>[\s\S]*?<\/button>\s*<\/div>\s*<\/div>/;

const newEcoTemplate = `<div className="relative z-10 px-6 md:px-32 py-10 md:py-16 w-full flex flex-col items-center gap-10 md:gap-14">
                      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1 transform group-hover:translate-x-4 transition-transform duration-700 ease-out text-center md:text-left">
                          <h2 className="font-michroma uppercase text-4xl md:text-6xl lg:text-[5.5rem] tracking-tighter mb-0 text-black leading-[1.1]">
                            ECOSISTEMA<br/>COMPLETO
                          </h2>
                        </div>
                        
                        <div className="flex-1 md:max-w-xl text-center md:text-right flex flex-col md:items-end transform group-hover:-translate-x-2 transition-transform duration-700 ease-out">
                          <p className="font-inter font-medium text-black text-xl md:text-3xl leading-relaxed mb-0">
                            $1
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-center w-full transform group-hover:translate-y-[-4px] transition-transform duration-700 ease-out">
                        <button type="button" className="relative inline-flex items-center gap-4 px-10 py-5 border border-black rounded-full font-michroma text-xs tracking-[0.2em] uppercase text-black hover:bg-black hover:text-[#F5B700] transition-colors duration-500">
                          <span>Solicitar Acceso</span>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </button>
                      </div>
                  </div>`;

page = page.replace(regexEco, newEcoTemplate);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fix 7 applied');
