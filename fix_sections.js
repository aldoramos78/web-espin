const fs = require('fs');
const path = require('path');

const pages = [
  path.join('src', 'app', 'desarrollo', 'page.tsx'),
  path.join('src', 'app', 'agentes', 'page.tsx')
];

for (const p of pages) {
  let code = fs.readFileSync(p, 'utf8');

  // Replace CTA texts
  code = code.replace(/Solicitar Auditoría Operativa/gi, 'Solicitar Auditoría');
  code = code.replace(/Inicia la Auditoría/gi, 'Solicitar Auditoría');
  code = code.replace(/INICIA LA AUDITORÍA/g, 'SOLICITAR AUDITORÍA');
  
  // Refactor Section 1
  const sec1Regex = /<div className="flex items-center gap-4 mb-6 md:mb-8">\s*<div className="w-10 md:w-16 h-\[2px\] bg-\[#F5B700\]"><\/div>\s*<span className="font-michroma text-\[11px\] md:text-sm text-\[#F5B700\] tracking-widest uppercase">(01 \/ [^<]+)<\/span>\s*<\/div>\s*<div className="overflow-hidden pt-4 -mt-4">[\s\S]*?<\/div>\s*<\/div>/;
  code = code.replace(sec1Regex, (match, title) => {
    return `<div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                      <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                        ${title}
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>`;
  });

  // Refactor Section 2
  const sec2Regex = /<div className="flex items-center gap-4 mb-6 md:mb-10">\s*<div className="w-10 md:w-16 h-\[2px\] bg-\[#F5B700\]"><\/div>\s*<span className="font-michroma text-\[11px\] md:text-sm text-\[#F5B700\] tracking-widest uppercase">(02 \/ [^<]+)<\/span>\s*<\/div>\s*<div className="overflow-hidden mb-8 md:mb-16">[\s\S]*?<\/div>/;
  code = code.replace(sec2Regex, (match, title) => {
    return `<div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                      <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                        ${title}
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>`;
  });

  // Refactor Section 3
  const sec3Regex = /<div className="flex items-center gap-4 mb-6 md:mb-8">\s*<div className="w-10 md:w-16 h-\[2px\] bg-\[#F5B700\]"><\/div>\s*<span className="font-michroma text-\[11px\] md:text-sm text-\[#F5B700\] tracking-widest uppercase">(03 \/ [^<]+)<\/span>\s*<\/div>\s*<div className="overflow-hidden mb-10 md:mb-20 max-w-full">[\s\S]*?<\/div>/;
  code = code.replace(sec3Regex, (match, title) => {
    return `<div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                      <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                        ${title}
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>`;
  });

  // Refactor Section 4
  const sec4Regex = /<div className="flex items-center gap-4 mb-6 md:mb-8">\s*<div className="w-10 md:w-16 h-\[2px\] bg-\[#F5B700\]"><\/div>\s*<span className="font-michroma text-\[11px\] md:text-sm text-\[#F5B700\] tracking-widest uppercase">(04 \/ [^<]+)<\/span>\s*<\/div>\s*<div className="overflow-hidden mb-10 md:mb-16">[\s\S]*?<\/div>/;
  code = code.replace(sec4Regex, (match, title) => {
    return `<div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                      <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                        ${title}
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>`;
  });

  fs.writeFileSync(p, code);
}

// CTA replacement for page.tsx
const pagePath = path.join('src', 'app', 'page.tsx');
let pageCode = fs.readFileSync(pagePath, 'utf8');
pageCode = pageCode.replace(/Inicia la Auditoría/gi, 'Solicitar Auditoría');
pageCode = pageCode.replace(/INICIA LA AUDITORÍA/g, 'SOLICITAR AUDITORÍA');
pageCode = pageCode.replace(/Solicitar Auditoría Operativa/gi, 'Solicitar Auditoría');
pageCode = pageCode.replace(/SOLICITAR AUDITORÍA OPERATIVA/g, 'SOLICITAR AUDITORÍA');
fs.writeFileSync(pagePath, pageCode);

console.log('Sections and CTAs updated');
