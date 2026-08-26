const fs = require('fs');

let dev = fs.readFileSync('src/app/desarrollo/page.tsx', 'utf8');

// 1. Remove HeroBackground import if not needed elsewhere, but it's easier to just remove its usage.
dev = dev.replace(/<HeroBackground \/>/, 
  `<div className="absolute inset-0 z-0 bg-[url('/infraestructura-desarrollo-web-espin.webp')] bg-cover bg-center bg-no-repeat opacity-70 mix-blend-screen"></div>
   <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>`
);

// 2. Add Metadata and fix H1 size
const oldH1Section = /<h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-\[8\.5vw\] sm:text-\[7\.5vw\] md:text-\[6vw\] lg:text-\[4\.5vw\] break-words leading-\[1\.05\] md:leading-\[1\.05\] flex flex-col">/g;

const newH1Section = `<ScrollReveal delay={0.15}>
              <div className="font-space-mono text-[#F5B700] text-[10px] md:text-xs tracking-[0.2em] mb-6 uppercase">
                [MÓDULO 01] // ESTADO: ACTIVO // REPORTE TÉCNICO
              </div>
            </ScrollReveal>

            <h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] break-words leading-[1.1] md:leading-[1.1] flex flex-col w-full max-w-5xl">`;

dev = dev.replace(oldH1Section, newH1Section);

// To ensure "DESARROLLO WEB" doesn't wrap on mobile if it's too big, text-3xl is small enough to fit (approx 30px font size, 14 chars = ~250px, perfectly fits 320px mobile).

fs.writeFileSync('src/app/desarrollo/page.tsx', dev);
console.log('Done');
