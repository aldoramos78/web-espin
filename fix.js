const fs = require('fs');

// 1. UPDATE src/app/page.tsx
let pageCode = fs.readFileSync('src/app/page.tsx', 'utf8');

// Remove vertical lines
pageCode = pageCode.replace(/<div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-900 hidden md:block z-0 pointer-events-none"><\/div>/g, '');
pageCode = pageCode.replace(/<div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-900 hidden md:block z-0"><\/div>/g, '');

// Update lobby rows data
pageCode = pageCode.replace(/title: "Infraestructura a Medida"/g, 'title: "Plataformas Web de Alto Rendimiento"');
pageCode = pageCode.replace(/desc: "Desplegamos sistemas que no se caen ni cuando el tr.*?"/g, 'desc: "Tu web es tu comercial más importante. Construimos páginas a medida, ultrarrápidas y seguras. Diseñadas para que tu cliente compre sin problemas y tu plataforma nunca se caiga en los peores momentos."');

pageCode = pageCode.replace(/title: "Sistemas Autónomos \(IA\)"/g, 'title: "IA y Automatización"');
pageCode = pageCode.replace(/desc: "Inyectamos lógica y automatización en tu negocio.*?"/g, 'desc: "Hacemos que tu empresa trabaje sola. Integramos asistentes virtuales y automatizamos tareas aburridas para que atiendas, respondas y vendas las 24 horas del día, reduciendo los costes de tu plantilla."');

pageCode = pageCode.replace(/title: "Arquitectura Genesis"/g, 'title: "Identidad y Creación de Marca"');
pageCode = pageCode.replace(/desc: "No levantamos ecosistemas sobre barro.*?"/g, 'desc: "La imagen de tu negocio debe justificar tus precios. Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten exclusividad, autoridad y confianza total en tu sector."');

// Update El Ecosistema Completo
pageCode = pageCode.replace(/DESPLIEGUE<br\/>INTEGRAL/g, 'EL ECOSISTEMA<br/>COMPLETO');
pageCode = pageCode.replace(/Las 3 divisiones sincronizadas en un solo ecosistema.*?"/g, 'Identidad visual, plataforma web y automatización con IA. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día."');

// Move Marquee
// Extract marquee block
const marqueeRegex = /({\/\*\s*MARQUEE SEPARATOR\s*\*\/}[\s\S]*?(?={\/\*\s*2\. EL ÍNDICE))/m;
const marqueeMatch = pageCode.match(marqueeRegex);
if (marqueeMatch) {
    let marqueeBlock = marqueeMatch[1];
    pageCode = pageCode.replace(marqueeRegex, ''); // remove from current location
    
    // Insert before EL HACHAZO (DESPLIEGUE INTEGRAL)
    const hachazoStart = pageCode.indexOf('{/* 3. EL HACHAZO');
    if (hachazoStart > -1) {
        pageCode = pageCode.substring(0, hachazoStart) + marqueeBlock + '\n            ' + pageCode.substring(hachazoStart);
    }
}

fs.writeFileSync('src/app/page.tsx', pageCode);

// 2. UPDATE src/components/ui/SmartHeader.tsx
let headerCode = fs.readFileSync('src/components/ui/SmartHeader.tsx', 'utf8');

const newNavLinks = `  const navLinks = [
    { label: "Plataformas Web", href: "/infraestructura" },
    { label: "IA y Automatización", href: "/sistemas-autonomos" },
    { label: "Creación de Marca", href: "/genesis" },
    { label: "Ecosistema Completo", href: "/ecosistema" },
  ];`;
headerCode = headerCode.replace(/const navLinks = \[[^\]]*\];/m, newNavLinks);
fs.writeFileSync('src/components/ui/SmartHeader.tsx', headerCode);

// 3. UPDATE src/components/ui/Footer.tsx
let footerCode = fs.readFileSync('src/components/ui/Footer.tsx', 'utf8');

// Make logo bigger: h-16 md:h-24 -> h-24 md:h-36
footerCode = footerCode.replace(/className="h-16 md:h-24 w-auto"/g, 'className="h-24 md:h-36 w-auto"');

// Make text blocks smaller
footerCode = footerCode.replace(/text-\[9px\] md:text-sm/g, 'text-[8px] md:text-[11px]');
footerCode = footerCode.replace(/text-xs md:text-lg/g, 'text-[10px] md:text-sm');

// Adjust subfooter to be tighter
footerCode = footerCode.replace(/mt-12 md:mt-16 pt-6/g, 'mt-8 md:mt-12 pt-3 md:pt-4');
footerCode = footerCode.replace(/py-16 md:py-24/g, 'py-10 md:py-16');

// Update Menu items in footer
footerCode = footerCode.replace(/'Infraestructura'/g, "'Plataformas Web'");
footerCode = footerCode.replace(/'Sistemas Autónomos'/g, "'IA y Automatización'");
footerCode = footerCode.replace(/'Arquitectura Genesis'/g, "'Creación de Marca'");

// Wait, the mobile version needs them on the SAME line.
// Currently: <div className="flex flex-row justify-between md:justify-end gap-6 sm:gap-12 md:gap-24 w-full md:w-2/3">
// This is already flex-row! So they are on the same line on mobile. It was just overflowing because of the font size and padding. With smaller font sizes they should easily fit. Let's make gap smaller on mobile just in case.
footerCode = footerCode.replace(/gap-6 sm:gap-12 md:gap-24/g, 'gap-4 sm:gap-8 md:gap-24');
// Ensure it fits tight
footerCode = footerCode.replace(/flex-col md:flex-row justify-between gap-12/g, 'flex-col md:flex-row justify-between gap-8 md:gap-12');

fs.writeFileSync('src/components/ui/Footer.tsx', footerCode);

// 4. UPDATE src/app/infraestructura/page.tsx
let infraCode = fs.readFileSync('src/app/infraestructura/page.tsx', 'utf8');

// Remove vertical lines
infraCode = infraCode.replace(/<div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-900 hidden md:block z-0 pointer-events-none"><\/div>/g, '');
infraCode = infraCode.replace(/<div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-900 hidden md:block z-0"><\/div>/g, '');

// Fix H1 INFRAESTRUCTURA size
infraCode = infraCode.replace(/text-\[11vw\] sm:text-\[9vw\] md:text-\[6\.5vw\] lg:text-\[5vw\]/g, 'text-[8.5vw] sm:text-[7.5vw] md:text-[6vw] lg:text-[4.5vw] whitespace-nowrap');

fs.writeFileSync('src/app/infraestructura/page.tsx', infraCode);

console.log('All updates completed successfully.');
