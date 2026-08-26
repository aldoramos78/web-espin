const fs = require('fs');
const path = require('path');

const subpages = [
  'src/app/agentes/page.tsx',
  'src/app/desarrollo/page.tsx',
  'src/app/ecosistema/page.tsx',
  'src/app/identidad/page.tsx'
];

subpages.forEach(page => {
  let fullPath = path.resolve(page);
  let content = fs.readFileSync(fullPath, 'utf8');

  // We are going to change the pb-16 md:pb-32 to pb-10 md:pb-20 in diagnostico
  // Wait, let's just make it identical by removing pb completely from diagnostico
  // and letting it just have mb-20 or whatever? 
  // Let's use pb-0 md:pb-0 for diagnostico, or pb-10 md:pb-20 to match PhaseRow's py-10 md:py-20.
  
  content = content.replace(
    /id="diagnostico" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black relative"/g,
    'id="diagnostico" className="px-6 md:px-12 pt-16 pb-10 md:pt-24 md:pb-20 bg-black relative"'
  );

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated padding in ${page}`);
});
