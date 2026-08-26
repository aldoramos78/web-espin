const fs = require('fs');

const pages = [
  'src/app/desarrollo/page.tsx',
  'src/app/agentes/page.tsx',
  'src/app/identidad/page.tsx',
  'src/app/ecosistema/page.tsx'
];

pages.forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // 1. Replace the H1 container classes and add the inline style for text-stroke
    const oldH1Regex = /<h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-\[5\.5vw\] sm:text-3xl md:text-4xl lg:text-\[3rem\] xl:text-\[3\.5rem\] break-words leading-\[1\.2\] flex flex-col w-full max-w-4xl border-l-4 md:border-l-\[6px\] border-\[#F5B700\] pl-4 md:pl-10">/;
    const newH1 = `<h1 style={{ WebkitTextStroke: '2px rgba(255,255,255,0.95)', color: 'transparent' }} className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[10vw] sm:text-[8vw] md:text-6xl lg:text-[5rem] xl:text-[6rem] break-words leading-[1.1] flex flex-col w-full max-w-5xl border-l-0 md:border-l-[6px] border-[#F5B700] pl-0 md:pl-10">`;
    
    content = content.replace(oldH1Regex, newH1);

    // 2. We need to remove text-white, text-[#F2EFE9], and any solid colors from the text lines inside the H1
    // We can do this by isolating the H1 block.
    const h1Start = content.indexOf('<h1 style={{ WebkitTextStroke');
    if (h1Start !== -1) {
      const h1End = content.indexOf('</h1>', h1Start);
      let h1Block = content.substring(h1Start, h1End);
      
      // Remove text colors so it inherits transparent color + stroke
      h1Block = h1Block.replace(/className="text-white"/g, 'className=""');
      h1Block = h1Block.replace(/className="text-\[#F2EFE9\]"/g, 'className=""');
      // For the dot "." which had text-[#F5B700], keep it yellow but maybe stroke it? No, if we just remove the class it inherits transparent white stroke.
      h1Block = h1Block.replace(/className="text-\[#F5B700\]"/g, 'className=""');
      
      content = content.substring(0, h1Start) + h1Block + content.substring(h1End);
    }
    
    fs.writeFileSync(p, content);
  }
});

console.log('H1 stroke and sizes updated.');
