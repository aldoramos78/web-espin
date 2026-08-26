const fs = require('fs');

// --- 1. Footer.tsx ---
let footer = fs.readFileSync('src/components/ui/Footer.tsx', 'utf8');

footer = footer.replace(/px-6 md:px-12/g, 'px-6 md:px-32');
footer = footer.replace(/<div className="max-w-7xl mx-auto flex/g, '<div className="w-full flex');

fs.writeFileSync('src/components/ui/Footer.tsx', footer);

// --- 2. page.tsx ---
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const ecoRegex = /<div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">/g;
page = page.replace(ecoRegex, '<div className="relative z-10 px-6 md:px-32 py-24 md:py-32 w-full flex flex-col md:flex-row items-center justify-between gap-12">');

page = page.replace(/EL ECOSISTEMA<br\/>COMPLETO/g, 'ECOSISTEMA<br/>COMPLETO');

page = page.replace(/py-20 md:py-0/g, 'py-20 md:py-32');

page = page.replace(
  /className="font-michroma uppercase text-3xl md:text-5xl lg:text-6xl tracking-tighter/g,
  'className="font-michroma uppercase text-3xl md:text-5xl lg:text-[4.5rem] leading-[1.1] tracking-tighter'
);

page = page.replace(/"IA, Agentes y Automatización"/g, '"Agentes y Automatización"');
page = page.replace(/"IA y Agentes"/g, '"Agentes y Automatización"');
page = page.replace(/title: "IA y Automatización"/g, 'title: "Agentes y Automatización"');

// Ensure the H1 of yellow block fits and looks good
page = page.replace(
  /className="font-michroma uppercase text-4xl md:text-6xl lg:text-\[6rem\] tracking-tighter mb-4 text-black leading-none"/g,
  'className="font-michroma uppercase text-4xl md:text-6xl lg:text-[5.5rem] tracking-tighter mb-4 text-black leading-[1.1]"'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fix applied!');
