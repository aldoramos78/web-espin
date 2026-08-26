const fs = require('fs');

// 1. Fix Pilares in agentes and desarrollo
const files = [
  'src/app/agentes/page.tsx',
  'src/app/desarrollo/page.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the exact block for PILARES
  const pilarRegex = /<div className="w-full md:w-\[80%\]">\s*<div className="flex items-center gap-4 mb-6 md:mb-8 pt-4 -mt-4">\s*<div className="w-10 md:w-16 h-\[2px\] bg-\[#F5B700\]"><\/div>\s*<span className="font-michroma text-\[11px\] md:text-sm text-\[#F5B700\] tracking-widest uppercase">(03 \/ [^<]+)<\/span>\s*<\/div>\s*<div className="overflow-hidden mb-10 md:mb-20 max-w-full">\s*<ScrollReveal variant="textReveal" className="font-michroma uppercase tracking-tighter leading-none text-white" style=\{\{ fontSize: 'clamp\(1\.75rem, 5vw, 4\.5rem\)' \}\}>\s*LOS PILARES<span className="text-\[#F5B700\]">\.<\/span>\s*<\/ScrollReveal>\s*<\/div>\s*<\/div>/;

  content = content.replace(pilarRegex, 
    `<div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                      <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                        $1
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>`
  );
  
  fs.writeFileSync(file, content);
}

// 2. Fix ECOSISTEMA COMPLETO sizing in page.tsx
const pageFile = 'src/app/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');
pageContent = pageContent.replace(
  /<h2 className="font-michroma uppercase text-3xl sm:text-4xl md:text-6xl lg:text-\[5\.5rem\] tracking-tighter mb-0 text-black leading-\[1\.1\]">\s*ECOSISTEMA<br\/>COMPLETO\s*<\/h2>/,
  `<h2 className="font-michroma uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] leading-[1.1] tracking-tighter mb-0 text-black">
                              ECOSISTEMA<br/>COMPLETO
                            </h2>`
);
fs.writeFileSync(pageFile, pageContent);

console.log('Fixed Pilares and Ecosistema Title');
