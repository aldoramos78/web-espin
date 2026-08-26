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

  // Increase doctrina top padding to give it more breathing room from PhaseRow
  content = content.replace(
    /id="doctrina" className="px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-32 bg-black border-b border-zinc-900 relative"/g,
    'id="doctrina" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative"'
  );
  
  // Just to be safe, I'll also bump metodo a bit so they feel balanced visually 
  // since the user noted they still don't match. 
  // Metodo top padding from pt-8 md:pt-12 -> pt-12 md:pt-16.
  content = content.replace(
    /id="metodo" className="px-6 md:px-12 pt-8 pb-0 md:pt-12 md:pb-0 bg-black"/g,
    'id="metodo" className="px-6 md:px-12 pt-12 pb-0 md:pt-16 md:pb-0 bg-black"'
  );

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated padding in ${page}`);
});
