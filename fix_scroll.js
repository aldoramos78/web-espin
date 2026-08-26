const fs = require('fs');

// 1. Remove scroll-smooth from layout.tsx
let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
layout = layout.replace(/className="scroll-smooth bg-black"/, 'className="bg-black"');
fs.writeFileSync('src/app/layout.tsx', layout);

// 2. Change ISO link in Footer.tsx
let footer = fs.readFileSync('src/components/ui/Footer.tsx', 'utf8');
footer = footer.replace(
  /<Link href="\/" className="inline-block text-white hover:text-zinc-300 transition-colors">/,
  `<button type="button" aria-label="Volver arriba" className="inline-block text-white hover:text-zinc-300 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>`
);
footer = footer.replace(
  /<\/svg>\s*<\/Link>/,
  `</svg>\n          </button>`
);
fs.writeFileSync('src/components/ui/Footer.tsx', footer);

console.log('Fixed smooth scroll on route load, and footer ISO link.');
