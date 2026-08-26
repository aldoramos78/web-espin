const fs = require('fs');

let eco = fs.readFileSync('src/app/ecosistema/page.tsx', 'utf8');

// 1. Remove white span from Gobernanza
eco = eco.replace(
  /<span className="text-white">seguro a todo riesgo continuo<\/span>/g,
  'seguro a todo riesgo continuo'
);

// 2. Update Gobernanza Title (make it h2 to match, with unified classes)
const unifiedTitleClass = 'font-michroma text-3xl md:text-5xl lg:text-[4rem] text-white mb-8 md:mb-12 uppercase leading-[1.1] tracking-wide';
eco = eco.replace(
  /<h3 className="font-michroma text-2xl md:text-4xl lg:text-5xl text-white mb-8 md:mb-12 uppercase leading-tight tracking-wide">\s*GOBERNANZA Y MANTENIMIENTO <span className="text-\[#F5B700\]">OBLIGATORIO<\/span>\.\s*<\/h3>/,
  `<h2 className="${unifiedTitleClass}">\n                  GOBERNANZA Y MANTENIMIENTO <span className="text-[#F5B700]">OBLIGATORIO</span>.\n                </h2>`
);

// 3. Update Delega Title
eco = eco.replace(
  /<h2 className="font-michroma text-\[10vw\] sm:text-6xl md:text-7xl lg:text-\[6rem\] text-\[#F5B700\] mb-8 leading-\[1\.1\] tracking-tighter uppercase break-words w-full">\s*DELEGA LA TECNOLOGÍA\.<br \/>LIDERA TU MERCADO\.\s*<\/h2>/,
  `<h2 className="${unifiedTitleClass}">\n                DELEGA LA TECNOLOGÍA.<br /> <span className="text-[#F5B700]">LIDERA</span> TU MERCADO.\n              </h2>`
);
// In case of utf-8 encoding issue for Í:
eco = eco.replace(
  /<h2 className="font-michroma text-\[10vw\] sm:text-6xl md:text-7xl lg:text-\[6rem\] text-\[#F5B700\] mb-8 leading-\[1\.1\] tracking-tighter uppercase break-words w-full">\s*DELEGA LA TECNOLOGA\.<br \/>LIDERA TU MERCADO\.\s*<\/h2>/,
  `<h2 className="${unifiedTitleClass}">\n                DELEGA LA TECNOLOGÍA.<br /> <span className="text-[#F5B700]">LIDERA</span> TU MERCADO.\n              </h2>`
);


// 4. Update Delega Paragraph to match sizes
const unifiedPClass = 'font-inter font-light text-zinc-400 text-lg md:text-xl lg:text-2xl leading-relaxed mb-16 max-w-3xl mx-auto';
eco = eco.replace(
  /<p className="font-inter font-light text-zinc-400 text-base md:text-xl lg:text-2xl leading-relaxed mb-16 max-w-2xl mx-auto">/g,
  `<p className="${unifiedPClass}">`
);


fs.writeFileSync('src/app/ecosistema/page.tsx', eco);
console.log('Done');
