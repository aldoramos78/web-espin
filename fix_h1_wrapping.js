const fs = require('fs');
const path = require('path');

const pagePath = path.resolve('src/app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// The original class string is:
// className="font-clash font-bold uppercase mb-8 md:mb-12 text-[10vw] sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[8.5rem] leading-[1.1] md:leading-[1.1] flex flex-col break-words w-full max-w-[100vw]"

content = content.replace(
  /className="font-clash font-bold uppercase mb-8 md:mb-12 text-\[10vw\] sm:text-6xl md:text-7xl lg:text-\[8rem\] xl:text-\[8\.5rem\] leading-\[1\.1\] md:leading-\[1\.1\] flex flex-col break-words w-full max-w-\[100vw\]"/g,
  'className="font-clash font-bold uppercase mb-8 md:mb-12 text-[10vw] sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8rem] leading-[1.1] md:leading-[1.1] flex flex-col whitespace-nowrap w-full"'
);

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Fixed H1 sizing and wrapping on page.tsx');
