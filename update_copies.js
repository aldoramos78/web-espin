const fs = require('fs');

// 1. ecosistema/page.tsx
let eco = fs.readFileSync('src/app/ecosistema/page.tsx', 'utf8');
eco = eco.replace(/CEREBRO IA/g, 'AUTOMATIZACIÓN');
eco = eco.replace(
  /Identidad premium, infraestructura web de alto rendimiento y automatizaci.n con Inteligencia Artificial/g,
  '<span className="text-[#F5B700]">Identidad</span> premium, <span className="text-[#F5B700]">infraestructura</span> web de alto rendimiento y <span className="text-[#F5B700]">automatización</span> con Inteligencia Artificial'
);
fs.writeFileSync('src/app/ecosistema/page.tsx', eco);

// 2. desarrollo/page.tsx
let dev = fs.readFileSync('src/app/desarrollo/page.tsx', 'utf8');
dev = dev.replace(
  /<p className="font-inter font-normal text-zinc-400 text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">[\s\S]*?<\/p>/,
  `<p className="font-inter font-normal text-zinc-400 text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
                    El <span className="text-[#F5B700]">motor</span> digital de tu empresa. Cero errores, máxima <span className="text-[#F5B700]">seguridad</span> y un rendimiento diseñado exclusivamente para blindar tus <span className="text-[#F5B700]">ventas</span>.
                  </p>`
);
fs.writeFileSync('src/app/desarrollo/page.tsx', dev);

// 3. agentes/page.tsx
let age = fs.readFileSync('src/app/agentes/page.tsx', 'utf8');
age = age.replace(
  /Hacemos que tu empresa trabaje sola\. Integramos asistentes virtuales y automatizamos procesos internos para que tu negocio opere, atienda y venda las 24 horas del d.a sin margen de error humano\./,
  'Hacemos que tu <span className="text-[#F5B700]">empresa</span> trabaje sola. Integramos asistentes virtuales y automatizamos <span className="text-[#F5B700]">procesos</span> internos para que tu negocio opere, atienda y venda las <span className="text-[#F5B700]">24 horas</span> del día sin margen de error humano.'
);
fs.writeFileSync('src/app/agentes/page.tsx', age);

// 4. identidad/page.tsx
let ident = fs.readFileSync('src/app/identidad/page.tsx', 'utf8');
ident = ident.replace(
  /La imagen de tu negocio debe justificar tus precios\. Dise.amos marcas desde cero y renovamos empresas estancadas para que proyecten exclusividad, autoridad y confianza total en tu sector\./,
  'La <span className="text-[#F5B700]">imagen</span> de tu negocio debe justificar tus precios. Diseñamos marcas desde cero y renovamos empresas estancadas para que proyecten <span className="text-[#F5B700]">exclusividad</span>, autoridad y <span className="text-[#F5B700]">confianza</span> total en tu sector.'
);
fs.writeFileSync('src/app/identidad/page.tsx', ident);

console.log('Updated texts successfully');
