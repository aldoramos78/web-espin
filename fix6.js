const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix inner padding of the box (for Ecosistema)
// Make sure it has py-16 md:py-24 and px-6 md:px-32
const ecoRegex = /<div className="relative z-10 px-6 md:px-32 py-12 md:py-16 w-full flex flex-col md:flex-row items-center justify-between gap-12">/g;
page = page.replace(ecoRegex, '<div className="relative z-10 px-6 md:px-32 py-16 md:py-24 w-full flex flex-col md:flex-row items-center justify-between gap-12">');

// Fix the P line-height to be exactly leading-relaxed md:leading-[1.6]
page = page.replace(/leading-relaxed md:leading-tight mt-4 md:mt-6/g, 'leading-relaxed md:leading-[1.6] mt-4 md:mt-6');

// Ensure titles in boxes are smaller: text-3xl md:text-4xl lg:text-[3.5rem]
page = page.replace(
  /className="font-michroma uppercase text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tighter/g,
  'className="font-michroma uppercase text-3xl md:text-4xl lg:text-[3.5rem] leading-[1.1] tracking-tighter'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed sizes');
