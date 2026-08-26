const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Fix the Ecosistema block wrapping and Button style
const oldBlockRegex = /<div className=\"relative z-10 px-6 md:px-32 py-10 md:py-16 w-full flex flex-col items-center gap-10 md:gap-14\">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const newBlock = `<div className="relative z-10 px-6 md:px-32 py-8 md:py-10 w-full flex flex-col items-center">
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
                      
                      <div className="mt-10 md:mt-16 flex justify-center w-full transform group-hover:translate-y-[-4px] transition-transform duration-700 ease-out">
                        <button type="button" className="relative inline-flex items-center gap-4 px-10 py-5 border border-black bg-black rounded-full font-michroma text-xs tracking-[0.2em] uppercase text-[#F5B700] hover:bg-transparent hover:text-black transition-colors duration-500">
                          <span>Solicitar Acceso</span>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </button>
                      </div>
                  </div>`;

// Apply replace
if (oldBlockRegex.test(page)) {
    page = page.replace(oldBlockRegex, newBlock);
} else {
    // If exact regex fails, we can just replace the button and wrappers manually
    page = page.replace(/py-10 md:py-16 w-full flex flex-col items-center gap-10 md:gap-14/g, 'py-8 md:py-10 w-full flex flex-col items-center');
    
    // Replace button
    page = page.replace(/className=\"relative inline-flex items-center gap-4 px-10 py-5 border border-black rounded-full font-michroma text-xs tracking-\[0\.2em\] uppercase text-black hover:bg-black hover:text-\[#F5B700\] transition-colors duration-500\"/g, 'className=\"relative inline-flex items-center gap-4 px-10 py-5 border border-black bg-black rounded-full font-michroma text-xs tracking-[0.2em] uppercase text-[#F5B700] hover:bg-transparent hover:text-black transition-colors duration-500\"');
    
    // Replace the div holding the button to give it margin top instead of relying on gap
    page = page.replace(/<div className=\"flex justify-center w-full transform group-hover:translate-y-\[-4px\] transition-transform duration-700 ease-out\">/g, '<div className=\"mt-10 md:mt-16 flex justify-center w-full transform group-hover:translate-y-[-4px] transition-transform duration-700 ease-out\">');
    
    // Fix the newlines inside the p tag
    page = page.replace(/<p className=\"font-inter font-medium text-black text-xl md:text-3xl leading-relaxed mb-0\">\s*Identidad visual, plataforma web y automatizaci.n con IA\. Delegas toda la modernizaci.n de tu empresa en un solo equipo para liderar tu mercado desde el primer d.a\.\s*<\/p>/g, '<p className=\"font-inter font-medium text-black text-xl md:text-3xl leading-relaxed mb-0\">\n                          Identidad visual, plataforma web y automatización con IA. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día.\n                        </p>');
}

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fix 8 applied');
