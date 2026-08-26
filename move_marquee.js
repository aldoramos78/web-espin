const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Extract the marquee block
const marqueeRegex = /\{\/\*\s*MARQUEE SEPARATOR\s*\*\/\}[\s\S]*?(?=\{\/\*\s*ECOSISTEMA COMPLETO\s*\*\/)/;
const marqueeMatch = content.match(marqueeRegex);
if (!marqueeMatch) throw new Error("Marquee not found");
const marqueeBlock = marqueeMatch[0];

// Remove it from its current position
content = content.replace(marqueeRegex, '');

// Insert it right before the footer
content = content.replace(/\{\/\*\s*FOOTER\s*\*\/\}/, marqueeBlock + '\n        {/* FOOTER */}');

fs.writeFileSync('src/app/page.tsx', content);
