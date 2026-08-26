const fs = require('fs');
const path = require('path');
const target = path.join('src', 'app', 'desarrollo', 'page.tsx');
let code = fs.readFileSync(target, 'utf8');

let dxStart = code.indexOf('id="diagnostico"');
let nextSection = code.indexOf('<section', dxStart + 20);
let dxSection = code.substring(dxStart, nextSection);

if (!dxSection.includes('</ScrollReveal>')) {
    dxSection = dxSection.replace(/<\/section>/, '</ScrollReveal>\n          </section>');
    code = code.substring(0, dxStart) + dxSection + code.substring(nextSection);
    fs.writeFileSync(target, code);
}

const target2 = path.join('src', 'app', 'agentes', 'page.tsx');
let code2 = fs.readFileSync(target2, 'utf8');
dxStart = code2.indexOf('id="diagnostico"');
nextSection = code2.indexOf('<section', dxStart + 20);
dxSection = code2.substring(dxStart, nextSection);

if (!dxSection.includes('</ScrollReveal>')) {
    dxSection = dxSection.replace(/<\/section>/, '</ScrollReveal>\n          </section>');
    code2 = code2.substring(0, dxStart) + dxSection + code2.substring(nextSection);
    fs.writeFileSync(target2, code2);
}
console.log('Fixed section 1 scrollreveal');
