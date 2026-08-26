const fs = require('fs');
const path = require('path');

// 1. Remove border-b from diagnostico in subpages
const subpages = [
  'src/app/agentes/page.tsx',
  'src/app/desarrollo/page.tsx',
  'src/app/ecosistema/page.tsx',
  'src/app/identidad/page.tsx'
];

subpages.forEach(page => {
  let fullPath = path.resolve(page);
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(
    /id="diagnostico" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative"/g,
    'id="diagnostico" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black relative"'
  );
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${page}`);
});

// 2. Increase H1 size on home page
const homePage = path.resolve('src/app/page.tsx');
let homeContent = fs.readFileSync(homePage, 'utf8');

// Find the H1
homeContent = homeContent.replace(
  'text-[10vw] sm:text-6xl md:text-7xl lg:text-[7rem]',
  'text-[10vw] sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[8.5rem]'
);

fs.writeFileSync(homePage, homeContent, 'utf8');
console.log('Updated page.tsx H1');
