const fs = require('fs');
const path = require('path');
const targetPath = path.join('src', 'app', 'agentes', 'page.tsx');
let code = fs.readFileSync(targetPath, 'utf8');

// Replace the entire H1 block
const h1Regex = /<h1[\s\S]*?<\/h1>/;
const newH1 = `<h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[6.5vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] leading-[1.1] md:leading-[1.05] flex flex-col">
  <div className="overflow-hidden">
    <ScrollReveal variant="textReveal" delay={0.1} className="text-white">
      AGENTES Y
    </ScrollReveal>
  </div>
  <div className="overflow-hidden pb-4">
    <ScrollReveal variant="textReveal" delay={0.2} className="text-[#F2EFE9] whitespace-nowrap">
      AUTOMATIZACIÓN<span className="text-[#F5B700]">.</span>
    </ScrollReveal>
  </div>
</h1>`;
code = code.replace(h1Regex, newH1);

fs.writeFileSync(targetPath, code);
console.log('Hero size fixed');
