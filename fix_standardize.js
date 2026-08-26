const fs = require('fs');

const heroBgReplace = `<div className="absolute inset-0 z-0 bg-[url('/infraestructura-desarrollo-web-espin.webp')] bg-cover bg-center bg-no-repeat opacity-70 mix-blend-screen"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>`;

function getMetadataBlock(moduleNum, pageName) {
  return `<ScrollReveal delay={0.15}>
              <div className="font-space-mono text-[#F5B700] text-[10px] md:text-xs tracking-[0.2em] mb-6 uppercase">
                [MÓDULO 0${moduleNum}] // ESTADO: ACTIVO // REPORTE TÉCNICO: ${pageName}
              </div>
            </ScrollReveal>

            <h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] break-words leading-[1.1] md:leading-[1.1] flex flex-col w-full max-w-5xl">`;
}

// 1. DESARROLLO (already has bg, just update metadata and ids)
if (fs.existsSync('src/app/desarrollo/page.tsx')) {
  let dev = fs.readFileSync('src/app/desarrollo/page.tsx', 'utf8');
  dev = dev.replace(
    /\[MÓDULO 01\] \/\/ ESTADO: ACTIVO \/\/ REPORTE TÉCNICO/,
    '[MÓDULO 01] // ESTADO: ACTIVO // REPORTE TÉCNICO: DESARROLLO'
  );
  dev = dev.replace(/id="protocolo"/g, 'id="metodo"');
  dev = dev.replace(/id="pilares"/g, 'id="doctrina"');
  dev = dev.replace(/id="resultados"/g, 'id="casos"');
  fs.writeFileSync('src/app/desarrollo/page.tsx', dev);
}

// 2. AGENTES
if (fs.existsSync('src/app/agentes/page.tsx')) {
  let ag = fs.readFileSync('src/app/agentes/page.tsx', 'utf8');
  ag = ag.replace(/<HeroBackground \/>/, heroBgReplace);
  
  const oldH1 = /<h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12[^>]+>/;
  ag = ag.replace(oldH1, getMetadataBlock(2, 'AGENTES'));
  
  ag = ag.replace(/id="protocolo"/g, 'id="metodo"');
  ag = ag.replace(/id="pilares"/g, 'id="doctrina"');
  ag = ag.replace(/id="resultados"/g, 'id="casos"');
  fs.writeFileSync('src/app/agentes/page.tsx', ag);
}

// 3. IDENTIDAD
if (fs.existsSync('src/app/identidad/page.tsx')) {
  let iden = fs.readFileSync('src/app/identidad/page.tsx', 'utf8');
  iden = iden.replace(/<HeroBackground \/>/, heroBgReplace);
  
  const oldH1 = /<h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12[^>]+>/;
  iden = iden.replace(oldH1, getMetadataBlock(3, 'IDENTIDAD'));
  
  iden = iden.replace(/id="protocolo"/g, 'id="metodo"');
  iden = iden.replace(/id="pilares"/g, 'id="doctrina"');
  iden = iden.replace(/id="resultados"/g, 'id="casos"');
  fs.writeFileSync('src/app/identidad/page.tsx', iden);
}

// 4. ECOSISTEMA
if (fs.existsSync('src/app/ecosistema/page.tsx')) {
  let eco = fs.readFileSync('src/app/ecosistema/page.tsx', 'utf8');
  eco = eco.replace(/<HeroBackground \/>/, heroBgReplace);
  
  const oldH1 = /<h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12[^>]+>/;
  eco = eco.replace(oldH1, getMetadataBlock(4, 'ECOSISTEMA'));
  
  // Update section IDs (it has trilogia, escudo, cierre) -> requested to use metodo, doctrina, casos
  eco = eco.replace(/id="trilogia"/g, 'id="metodo"');
  eco = eco.replace(/id="escudo"/g, 'id="doctrina"');
  eco = eco.replace(/id="cierre"/g, 'id="casos"');
  
  fs.writeFileSync('src/app/ecosistema/page.tsx', eco);
}

console.log('Done standardizing IDs and Metadata');
