const fs = require('fs');
const path = require('path');
const targetPath = path.join('src', 'app', 'agentes', 'page.tsx');
let code = fs.readFileSync(targetPath, 'utf8');

// Replace the entire H1 block
const h1Regex = /<h1[\s\S]*?<\/h1>/;
const newH1 = `<h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[10vw] sm:text-[7.5vw] md:text-[6vw] lg:text-[4.5vw] leading-[1.1] md:leading-[1.05] flex flex-col">
  <div className="overflow-hidden">
    <ScrollReveal variant="textReveal" delay={0.1} className="text-white">
      AGENTES Y
    </ScrollReveal>
  </div>
  <div className="overflow-hidden">
    <ScrollReveal variant="textReveal" delay={0.2} className="text-[#F2EFE9]" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal' }}>
      AUTOMATIZACIÓN<span className="text-[#F5B700]">.</span>
    </ScrollReveal>
  </div>
</h1>`;
code = code.replace(h1Regex, newH1);

// Replace the Hero description
const pRegex = /<p className="font-inter font-light text-zinc-300 text-xl md:text-2xl lg:text-3xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">[\s\S]*?<\/p>/;
const newP = `<p className="font-inter font-light text-zinc-300 text-lg md:text-2xl lg:text-3xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
Hacemos que tu empresa trabaje sola. Integramos asistentes virtuales y automatizamos procesos internos para que tu negocio opere, atienda y venda las 24 horas del día sin margen de error humano.
</p>`;
code = code.replace(pRegex, newP);

fs.writeFileSync(targetPath, code);
console.log('Hero fixed');
