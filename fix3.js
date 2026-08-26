const fs = require('fs');

// --- 1. SmartHeader.tsx ---
let header = fs.readFileSync('src/components/ui/SmartHeader.tsx', 'utf8');
const newNavLinks = `  const navLinks = [
    { label: "Desarrollo", href: "/infraestructura" },
    { label: "Agentes", href: "/sistemas-autonomos" },
    { label: "Identidad", href: "/genesis" },
    { label: "Ecosistema", href: "/ecosistema" },
  ];`;
header = header.replace(/const navLinks = \[[^\]]*\];/m, newNavLinks);
fs.writeFileSync('src/components/ui/SmartHeader.tsx', header);

// --- 2. Footer.tsx ---
let footer = fs.readFileSync('src/components/ui/Footer.tsx', 'utf8');

// Change wrapper from py-10 md:py-16 to pt-10 md:pt-20 and pb-0 (since subfooter will have its own padding)
footer = footer.replace(/py-10 md:py-16/, 'pt-10 md:pt-20 pb-0');
footer = footer.replace(/py-16 md:py-24/, 'pt-10 md:pt-20 pb-0'); // fallback if it was the old one

// Subfooter: ensure bottom padding equals top padding. `pt-3 md:pt-4` -> `py-6 md:py-10`
footer = footer.replace(/mt-8 md:mt-12 pt-3 md:pt-4/, 'mt-12 md:mt-16 py-6 md:py-8');
footer = footer.replace(/mt-12 md:mt-16 pt-6/, 'mt-12 md:mt-16 py-6 md:py-8');

// Make ISO much bigger, centered in web, hide in mobile
// Replace `<div className="flex flex-col gap-6 md:w-1/3">` with hidden on mobile, centered on desktop
footer = footer.replace(
  /<div className="flex flex-col gap-6 md:w-1\/3">/, 
  '<div className="hidden md:flex flex-col justify-center items-center md:w-1/3">'
);
// Make ISO h-24 md:h-36 -> h-40 md:h-56
footer = footer.replace(/className="h-24 md:h-36 w-auto"/, 'className="h-32 md:h-56 w-auto"');
footer = footer.replace(/className="h-16 md:h-24 w-auto"/, 'className="h-32 md:h-56 w-auto"');

// Links gap: "Demasiada separación entre los textos de las secciones."
footer = footer.replace(/py-2 md:py-6/g, 'py-1 md:py-2');

// Update menu text in footer
footer = footer.replace(/'Plataformas Web'/g, "'Desarrollo'");
footer = footer.replace(/'IA y Automatización'/g, "'Agentes'");
footer = footer.replace(/'Creación de Marca'/g, "'Identidad'");

fs.writeFileSync('src/components/ui/Footer.tsx', footer);

// --- 3. page.tsx ---
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Update Lobby Row text
page = page.replace(/"Plataformas Web de Alto Rendimiento"/, '"Desarrollo Web de Alto Rendimiento"');
page = page.replace(/"IA y Automatización"/, '"IA, Agentes y Automatización"');
page = page.replace(/"EL ECOSISTEMA<br\/>COMPLETO"/, '"ECOSISTEMA<br/>COMPLETO"');

// Update row spacing & text breathing room
// The row padding is probably something like `py-24 md:py-32` or similar. Let's find it.
// The P tag:
// <p className="font-inter font-light text-zinc-400 group-hover:text-white text-lg md:text-2xl leading-relaxed transition-colors duration-500">
page = page.replace(
  /className="font-inter font-light text-zinc-400 group-hover:text-white text-lg md:text-2xl leading-relaxed transition-colors duration-500"/g,
  'className="font-inter font-light text-zinc-400 group-hover:text-white text-lg md:text-2xl leading-[1.8] md:leading-[2] mt-6 md:mt-10 transition-colors duration-500"'
);

// Check if we need to adjust the H2 to fit perfectly in mobile for rows
// Let's make H2 responsive mobile first
page = page.replace(
  /className="font-michroma uppercase text-2xl md:text-5xl lg:text-6xl tracking-tighter mb-4/g,
  'className="font-michroma uppercase text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-4 md:mb-8'
);

fs.writeFileSync('src/app/page.tsx', page);

console.log('Fix applied successfully.');
