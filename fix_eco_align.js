const fs = require('fs');

const file = 'src/app/ecosistema/page.tsx';
if (fs.existsSync(file)) {
  let eco = fs.readFileSync(file, 'utf8');
  
  // 1. Escudo section container
  eco = eco.replace(
    /className="max-w-4xl mx-auto flex flex-col md:text-center items-start md:items-center mt-12 md:mt-24"/g,
    'className="w-full max-w-5xl flex flex-col items-start text-left mt-12 md:mt-24"'
  );
  
  // 2. Cierre section container
  eco = eco.replace(
    /className="max-w-5xl mx-auto flex flex-col items-center text-center mt-12 md:mt-24"/g,
    'className="w-full max-w-6xl flex flex-col items-start text-left mt-12 md:mt-24"'
  );
  
  // 3. Cierre section paragraph
  eco = eco.replace(
    /className="font-inter font-light text-zinc-400 text-lg md:text-xl lg:text-2xl leading-relaxed mb-16 max-w-3xl mx-auto"/g,
    'className="font-inter font-light text-zinc-400 text-lg md:text-xl lg:text-2xl leading-relaxed mb-16 max-w-3xl"'
  );

  fs.writeFileSync(file, eco);
  console.log('Fixed alignment in Ecosistema.');
}
