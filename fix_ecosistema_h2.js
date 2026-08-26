const fs = require('fs');

const file = 'src/app/ecosistema/page.tsx';
if (fs.existsSync(file)) {
  let eco = fs.readFileSync(file, 'utf8');
  
  // Replace the exact H2 class string causing the overflow
  const oldClass = 'className="font-michroma text-3xl md:text-5xl lg:text-[4rem] text-white mb-8 md:mb-12 uppercase leading-[1.1] tracking-wide"';
  const newClass = 'className="font-michroma text-[7vw] sm:text-3xl md:text-5xl lg:text-[4rem] text-white mb-8 md:mb-12 uppercase leading-[1.1] tracking-wide break-words"';
  
  eco = eco.replace(new RegExp(oldClass.replace(/\[/g, '\\[').replace(/\]/g, '\\]'), 'g'), newClass);
  
  fs.writeFileSync(file, eco);
  console.log('Fixed H2 overflow in Ecosistema.');
}
