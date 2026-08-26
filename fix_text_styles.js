const fs = require('fs');
const path = require('path');

const pages = [
  path.join('src', 'app', 'desarrollo', 'page.tsx'),
  path.join('src', 'app', 'agentes', 'page.tsx')
];

for (const p of pages) {
  if (!fs.existsSync(p)) continue;
  let code = fs.readFileSync(p, 'utf8');

  // Change H1 in desarrollo
  if (p.includes('desarrollo')) {
    code = code.replace(
      /<ScrollReveal variant="textReveal" delay=\{0\.1\} className="text-white whitespace-nowrap">\s*INFRAESTRUCTURA\s*<\/ScrollReveal>/,
      `<ScrollReveal variant="textReveal" delay={0.1} className="text-white">
                      DESARROLLO WEB
                    </ScrollReveal>`
    );
    code = code.replace(
      /<ScrollReveal variant="textReveal" delay=\{0\.2\} className="text-\[#F2EFE9\] whitespace-nowrap">\s*A MEDIDA<span className="text-\[#F5B700\]">\.<\/span>\s*<\/ScrollReveal>/,
      `<ScrollReveal variant="textReveal" delay={0.2} className="text-[#F2EFE9]">
                      DE ALTO RENDIMIENTO<span className="text-[#F5B700]">.</span>
                    </ScrollReveal>`
    );
  }

  // Replace text styles to match "Image 1" (font-normal text-zinc-400 text-base md:text-lg)
  // Hero description
  code = code.replace(/font-inter font-light text-zinc-300 text-lg md:text-2xl lg:text-3xl/g, 'font-inter font-normal text-zinc-400 text-base md:text-xl lg:text-2xl');
  code = code.replace(/font-inter font-light text-zinc-300 text-xl md:text-2xl lg:text-3xl/g, 'font-inter font-normal text-zinc-400 text-base md:text-xl lg:text-2xl');
  
  // The Protocolo description
  code = code.replace(/font-inter font-light text-zinc-300 text-lg md:text-xl/g, 'font-inter font-normal text-zinc-400 text-base md:text-lg');
  
  // The Grid description (Dolor & Pilares)
  // They look like: font-inter font-light text-zinc-300 leading-relaxed mt-4 text-lg md:text-xl lg:text-xl ...
  // or font-inter font-light leading-relaxed mt-4 text-lg md:text-xl lg:text-xl ... text-zinc-300
  code = code.replace(/font-inter font-light text-zinc-300 leading-relaxed mt-4 text-lg md:text-xl lg:text-xl/g, 'font-inter font-normal text-zinc-400 leading-relaxed mt-4 text-base md:text-lg lg:text-lg');
  code = code.replace(/font-inter font-light leading-relaxed mt-4 text-lg md:text-xl lg:text-xl/g, 'font-inter font-normal leading-relaxed mt-4 text-base md:text-lg lg:text-lg');
  
  // Replace leftover text-zinc-300 with text-zinc-400 just in case
  code = code.replace(/text-zinc-300/g, 'text-zinc-400');
  // Replace leftover font-light with font-normal inside font-inter contexts
  code = code.replace(/font-inter font-light/g, 'font-inter font-normal');

  fs.writeFileSync(p, code);
}
console.log('Fixed styling and title');
