const fs = require('fs');

const pages = [
  'src/app/desarrollo/page.tsx',
  'src/app/agentes/page.tsx',
  'src/app/identidad/page.tsx',
  'src/app/ecosistema/page.tsx'
];

const oldH1Class = 'className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] break-words leading-[1.1] md:leading-[1.1] flex flex-col w-full max-w-5xl"';
const newH1Class = 'className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] break-words leading-[1.2] flex flex-col w-full max-w-4xl border-l-[6px] border-[#F5B700] pl-6 md:pl-10"';

pages.forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(oldH1Class, newH1Class);
    fs.writeFileSync(p, content);
  }
});

console.log('H1 shrunk and styled.');
