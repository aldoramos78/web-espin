const fs = require('fs');

// 1. Fix Hero H2 styles (remove spans)
let idPage = fs.readFileSync('src/app/identidad/page.tsx', 'utf8');

const heroDescRegex = /La imagen de tu negocio debe <span className="text-\[#F5B700\]">justificar tus precios<\/span>\. Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten <span className="text-white font-normal">exclusividad, autoridad y confianza total<\/span> en tu sector\./;
idPage = idPage.replace(
  heroDescRegex,
  `La imagen de tu negocio debe justificar tus precios. Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten exclusividad, autoridad y confianza total en tu sector.`
);

// 2. Fix + VALOR text size for responsiveness
const valorRegex = /<span className="text-\[#F5B700\] text-6xl md:text-7xl mr-2 font-inter tracking-normal">\+<\/span>\s*VALOR/g;
idPage = idPage.replace(
  /<div className="text-6xl md:text-7xl text-white mb-2 font-michroma tracking-tighter flex items-baseline">\s*<span className="text-\[#F5B700\] text-6xl md:text-7xl mr-2 font-inter tracking-normal">\+<\/span>\s*VALOR\s*<\/div>/,
  `<div className="text-4xl sm:text-5xl md:text-7xl text-white mb-2 font-michroma tracking-tighter flex items-baseline">
                    <span className="text-[#F5B700] text-4xl sm:text-5xl md:text-7xl mr-2 font-inter tracking-normal">+</span>
                    VALOR
                  </div>`
);

// 3. Fix Marquee styling to match desarrollo exactly (no solid text, and use the 8-pointed star)
const oldMarqueeRegex = /<div className="marquee-content flex whitespace-nowrap w-max" style=\{\{ animationDuration: '60s' \}\}>[\s\S]*?<\/div>\s*<\/div>/;

const newMarquee = `<div className="marquee-content flex whitespace-nowrap w-max" style={{ animationDuration: '60s' }}>
            {[1,2,3,4].map((i) => (
              <div key={i} className="marquee-item flex items-center justify-center min-w-max">
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  AUTORIDAD VISUAL
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  CONFIANZA INMEDIATA
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  PRECIOS JUSTIFICADOS
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  POSICIONAMIENTO PREMIUM
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
              </div>
            ))}
          </div>
        </div>`;

idPage = idPage.replace(oldMarqueeRegex, newMarquee);

fs.writeFileSync('src/app/identidad/page.tsx', idPage);
console.log('Fixed H2 style, Marquee, and +VALOR responsiveness.');
