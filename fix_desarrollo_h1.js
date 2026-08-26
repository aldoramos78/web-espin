const fs = require('fs');
const path = require('path');

const targetPath = path.join('src', 'app', 'desarrollo', 'page.tsx');
let content = fs.readFileSync(targetPath, 'utf8');

// Replace the stacked blocks in desarrollo
const h1Regex = /<div className="overflow-hidden">\s*<ScrollReveal variant="textReveal" delay=\{0\.1\}>\s*INFRAESTRUCTURA\s*<\/ScrollReveal>\s*<\/div>\s*<div className="overflow-hidden">\s*<ScrollReveal variant="textReveal" delay=\{0\.15\}>\s*A\s*<\/ScrollReveal>\s*<\/div>\s*<div className="overflow-hidden">\s*<ScrollReveal variant="textReveal" delay=\{0\.2\} className="text-white text-\[8\.5vw\] sm:text-\[7\.5vw\] md:text-\[6vw\] lg:text-\[4\.5vw\] whitespace-nowrap">\s*MEDIDA<span className="text-\[#F5B700\]">\.<\/span>\s*<\/ScrollReveal>\s*<\/div>/;

const newH1Blocks = `<div className="overflow-hidden">
                    <ScrollReveal variant="textReveal" delay={0.1} className="text-white whitespace-nowrap">
                      INFRAESTRUCTURA
                    </ScrollReveal>
                  </div>
                  <div className="overflow-hidden pb-4">
                    <ScrollReveal variant="textReveal" delay={0.2} className="text-[#F2EFE9] whitespace-nowrap">
                      A MEDIDA<span className="text-[#F5B700]">.</span>
                    </ScrollReveal>
                  </div>`;

content = content.replace(h1Regex, newH1Blocks);
// Ensure H1 wrapper is the correct size
content = content.replace(/text-\[8\.5vw\] sm:text-\[7\.5vw\] md:text-\[6vw\] lg:text-\[4\.5vw\]/g, 'text-[6.5vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw]');
content = content.replace(/text-\[8\.5vw\] md:text-\[6vw\] lg:text-\[4\.5vw\]/g, 'text-[6.5vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw]');

fs.writeFileSync(targetPath, content);
console.log('Fixed desarrollo H1');
