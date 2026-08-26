const fs = require('fs');
const path = require('path');

// 1. Modify the 4 subpages
const subpages = [
  'src/app/agentes/page.tsx',
  'src/app/desarrollo/page.tsx',
  'src/app/ecosistema/page.tsx',
  'src/app/identidad/page.tsx'
];

subpages.forEach(page => {
  let fullPath = path.resolve(page);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Fix padding in metodo section
  content = content.replace(
    /id="metodo" className="px-6 md:px-12 pt-16 pb-0 md:pt-24 md:pb-0 bg-black"/g,
    'id="metodo" className="px-6 md:px-12 pt-8 pb-0 md:pt-12 md:pb-0 bg-black"'
  );

  // Fix grid items border-b
  content = content.replace(
    /border-b border-zinc-900 md:border-r group/g,
    'border-b last:border-b-0 md:border-b-0 border-zinc-900 md:border-r group'
  );

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated padding and borders in ${page}`);
});

// 2. Modify PhaseRow.tsx for bigger numbers
const phaseRowPath = path.resolve('src/components/ui/PhaseRow.tsx');
let phaseContent = fs.readFileSync(phaseRowPath, 'utf8');

phaseContent = phaseContent.replace(
  'text-6xl md:text-8xl',
  'text-[6rem] md:text-[10rem] lg:text-[12rem] leading-none'
);

fs.writeFileSync(phaseRowPath, phaseContent, 'utf8');
console.log('Updated PhaseRow.tsx sizes');
