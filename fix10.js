const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

page = page.replace(
  /className="absolute bottom-8 md:bottom-12 left-1\/2 transform -translate-x-1\/2/g,
  'className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2'
);

page = page.replace(
  /className="font-inter font-medium text-black text-xl md:text-3xl leading-relaxed mb-0"/g,
  'className="font-inter font-light text-black text-lg md:text-2xl leading-relaxed md:leading-[1.6] mb-0"'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fix 10 applied');
