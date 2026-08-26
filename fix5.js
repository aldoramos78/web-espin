const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Fix inner padding of the box
page = page.replace(/py-24 md:py-32/g, 'py-12 md:py-16');
page = page.replace(/py-20 md:py-32/g, 'py-12 md:py-16');
page = page.replace(/py-20 md:py-0/g, 'py-12 md:py-16');

// 2. Fix H2 size and leading
page = page.replace(
  /className="font-michroma uppercase text-3xl md:text-5xl lg:text-\[4\.5rem\] leading-\[1\.1\] tracking-tighter/g,
  'className="font-michroma uppercase text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tighter'
);

page = page.replace(
  /className="font-michroma uppercase text-3xl md:text-5xl lg:text-\[4\.5rem\] leading-\[1\.1\] md:leading-\[1\.1\] tracking-tighter/g,
  'className="font-michroma uppercase text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tighter'
);

// 3. Fix P spacing and leading
page = page.replace(
  /leading-\[1\.8\] md:leading-\[2\] mt-6 md:mt-10/g,
  'leading-relaxed md:leading-tight mt-4 md:mt-6'
);
page = page.replace(
  /leading-\[1\.8\] md:leading-\[2\] mt-4 md:mt-8/g,
  'leading-relaxed md:leading-tight mt-4 md:mt-6'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Page adjusted');
