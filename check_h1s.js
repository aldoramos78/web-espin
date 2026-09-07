const fs = require('fs');

const files = [
  'src/app/[lang]/desarrollo/page.tsx',
  'src/app/[lang]/agentes/page.tsx',
  'src/app/[lang]/identidad/page.tsx',
  'src/app/[lang]/ecosistema/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // First, find the H1. They all use hero-stroke and break-words with max-w-5xl.
  // Wait, these H1s are NOT "TECNOLÓGICA". They are things like "DESARROLLO WEB DE ALTO RENDIMIENTO".
  // They break words or wrap because they are multiple words!
  // If they wrap, vw sizing is different. Let's check one.
});
