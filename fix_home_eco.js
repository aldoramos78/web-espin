const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the <ContactTrigger className="block w-full"> wrapping the Ecosistema block
// with a normal div, a Link overlay, and ContactTrigger just for the button.

const oldBlockRegex = /<ContactTrigger className="block w-full">\s*<div\s*className="w-full bg-\[#F5B700\] relative overflow-hidden group transition-all duration-700 cursor-pointer flex flex-col justify-center min-h-\[45vh\] border-b border-\[#F5B700\]"\s*>([\s\S]*?)<\/ContactTrigger>/;

const newBlock = `<div className="w-full bg-[#F5B700] relative overflow-hidden group transition-all duration-700 flex flex-col justify-center min-h-[45vh] border-b border-[#F5B700]">
                
                <Link href="/ecosistema" className="absolute inset-0 z-10" aria-label="Ver Ecosistema Completo"></Link>

$1
              </div>`;

code = code.replace(oldBlockRegex, newBlock);

// Now fix the content inside to be pointer-events-none and the button to be ContactTrigger.
// We need to make the content pointer-events-none so the link is clickable anywhere else,
// but the button must be wrapped in ContactTrigger.

// Find the content div
code = code.replace(
  /<div className="relative z-10 px-6 md:px-32 py-12 md:py-16 w-full flex flex-col items-center">/,
  `<div className="relative z-10 px-6 md:px-32 py-12 md:py-16 w-full flex flex-col items-center pointer-events-none">`
);

// Find the button wrapper
code = code.replace(
  /<div className="relative md:absolute mt-12 pb-12 md:pb-0 md:bottom-10 left-0 md:left-1\/2 transform md:-translate-x-1\/2 w-full flex justify-center group-hover:translate-y-\[-4px\] transition-transform duration-700 ease-out z-20">\s*<button type="button" className="rings-btn black">([\s\S]*?)<\/button>\s*<\/div>/,
  `<div className="relative md:absolute mt-12 pb-12 md:pb-0 md:bottom-10 left-0 md:left-1/2 transform md:-translate-x-1/2 w-full flex justify-center group-hover:translate-y-[-4px] transition-transform duration-700 ease-out z-20">
                  <ContactTrigger className="inline-block cursor-pointer">
                    <button type="button" className="rings-btn black">
$1
                    </button>
                  </ContactTrigger>
                </div>`
);

fs.writeFileSync('src/app/page.tsx', code);
console.log('Fixed block');
