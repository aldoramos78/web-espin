const fs = require('fs');
const path = require('path');

// 1. Cleanup public/ directory
const publicDir = 'public';
const filesToDelete = [
  'file.svg',
  'globe.svg',
  'next.svg',
  'vercel.svg',
  'window.svg',
  'og-espin-perfect.png',
  'og-espin.jpg' // We will delete the OLD one, then rename the hero one to this name
];

filesToDelete.forEach(file => {
  const filePath = path.join(publicDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted ${file}`);
  }
});

// Rename the definitive one
if (fs.existsSync(path.join(publicDir, 'og-espin-hero.jpg'))) {
  fs.renameSync(path.join(publicDir, 'og-espin-hero.jpg'), path.join(publicDir, 'og-espin.jpg'));
  console.log('Renamed og-espin-hero.jpg to og-espin.jpg');
}

// 2. Update layout.tsx
let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
layout = layout.replace(/\/og-espin-hero\.jpg/g, '/og-espin.jpg');
fs.writeFileSync('src/app/layout.tsx', layout);
console.log('Updated layout.tsx');

// 3. Fix Spacing in pages
const pages = [
  'src/app/desarrollo/page.tsx',
  'src/app/agentes/page.tsx',
  'src/app/identidad/page.tsx'
];

pages.forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Remove pb-16 md:pb-32 and border-b from the section that contains PhaseRow (usually id="metodo")
    content = content.replace(
      /id="metodo" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative"/g,
      'id="metodo" className="px-6 md:px-12 pt-16 pb-0 md:pt-24 md:pb-0 bg-black relative"'
    );

    // Tighten the top padding of the next section (id="pilares")
    content = content.replace(
      /id="pilares" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative"/g,
      'id="pilares" className="px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-32 bg-black border-b border-zinc-900 relative"'
    );

    fs.writeFileSync(p, content);
    console.log(`Updated spacing in ${p}`);
  }
});

console.log('All tasks completed.');
