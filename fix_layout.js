const fs = require('fs');

// 1. Fix page.tsx CTA
let page = fs.readFileSync('src/app/page.tsx', 'utf8');
const oldCtaWrapper = /<div className="absolute bottom-4 md:bottom-6 left-1\/2 transform -translate-x-1\/2 w-full flex justify-center group-hover:translate-y-\[-4px\] transition-transform duration-700 ease-out z-20">/;
const newCtaWrapper = '<div className="relative md:absolute mt-12 pb-12 md:pb-0 md:bottom-10 left-0 md:left-1/2 transform md:-translate-x-1/2 w-full flex justify-center group-hover:translate-y-[-4px] transition-transform duration-700 ease-out z-20">';
page = page.replace(oldCtaWrapper, newCtaWrapper);
fs.writeFileSync('src/app/page.tsx', page);

// 2. Fix aviso-legal.tsx
const legalPaths = [
  'src/app/aviso-legal/page.tsx',
  'src/app/politica-de-cookies/page.tsx',
  'src/app/politica-de-privacidad/page.tsx',
  'src/app/manifiesto/page.tsx' // checking manifesto as well
];

for (const path of legalPaths) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Remove "y condiciones de uso" from aviso legal
    if (path.includes('aviso-legal')) {
      content = content.replace(/AVISO LEGAL Y CONDICIONES DE USO/g, 'AVISO LEGAL');
      content = content.replace(/Aviso Legal y Condiciones de Uso/g, 'Aviso Legal');
      content = content.replace(/y condiciones de uso/gi, ''); // generic fallback
    }

    // Fix the numbering layout for mobile (01 Title) -> (01 \n Title)
    // The previous format might be something like: <div className="flex gap-4 md:gap-8 items-start mb-6">
    // or <div className="flex items-start gap-4...
    // Let's replace 'flex flex-row' or just 'flex' with 'flex flex-col md:flex-row' where they define the number and title.
    
    // Actually, let's look for specific patterns like: `<div className="flex items-start gap-`
    content = content.replace(/<div className="flex items-start gap-6 md:gap-12/g, '<div className="flex flex-col md:flex-row items-start gap-2 md:gap-12');
    content = content.replace(/<div className="flex items-start gap-4 md:gap-8/g, '<div className="flex flex-col md:flex-row items-start gap-2 md:gap-8');
    
    // Adjust font sizes for the legal titles just in case
    content = content.replace(/text-2xl md:text-4xl/g, 'text-xl md:text-4xl');

    fs.writeFileSync(path, content);
  }
}

console.log('Fixes applied');
