const fs = require('fs');

const pages = [
  'src/app/desarrollo/page.tsx',
  'src/app/agentes/page.tsx',
  'src/app/identidad/page.tsx'
];

pages.forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Replace the specific paddings on the section that contains the PhaseRow array
    // In all files, it's called id="protocolo".
    content = content.replace(
      /id="protocolo" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900"/g,
      'id="protocolo" className="px-6 md:px-12 pt-16 pb-0 md:pt-24 md:pb-0 bg-black"'
    );
    
    // Also change pt on pilares to be very tight (pt-8 md:pt-12)
    // Wait, earlier my script successfully changed pilares:
    // id="pilares" className="px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-32 bg-black border-b border-zinc-900 relative"
    // Let's make it even tighter if we want to remove the gap:
    content = content.replace(
      /id="pilares" className="px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-32 bg-black border-b border-zinc-900 relative"/g,
      'id="pilares" className="px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-32 bg-black border-b border-zinc-900 relative"'
    ); // it is already pt-8 md:pt-12

    fs.writeFileSync(p, content);
  }
});
console.log('Fixed padding on protocolo sections.');
