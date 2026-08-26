const fs = require('fs');
const path = require('path');

const pagePath = path.resolve('src/app/manifiesto/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Replace H2 classes
content = content.replace(
  /className="font-clash font-semibold text-xl md:text-2xl text-\[#FFFFFF\] mb-6"/g,
  'className="font-clash font-semibold text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] mb-8 leading-[1.1]"'
);

// Replace Subtitle classes
content = content.replace(
  /className="text-\[#888888\] text-xs md:text-sm tracking-widest font-inter font-thin mt-2 block"/g,
  'className="text-[#FFFFFF] text-xs md:text-sm tracking-widest font-inter font-thin mt-4 block opacity-90"'
);

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Styles updated in manifiesto.');
