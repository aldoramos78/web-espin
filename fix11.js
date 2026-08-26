const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Move button outside the inner container
const regexToMove = /(<div className=\"absolute bottom-4 md:bottom-6 left-1\/2 transform -translate-x-1\/2 w-full flex justify-center group-hover:translate-y-\[-4px\] transition-transform duration-700 ease-out z-20\">[\s\S]*?<\/button>\s*<\/div>)\s*(<\/div>)/;
if (regexToMove.test(page)) {
    // $1 is the button div, $2 is the closing div of the inner text container
    // We want to flip their order so the button div comes AFTER the closing div of the text container
    page = page.replace(regexToMove, '$2\n$1');
} else {
    console.log('Regex to move button failed');
}

// 2. Change font-light to font-normal for the paragraphs
page = page.replace(
  /className=\"font-inter font-light text-black text-lg md:text-2xl leading-relaxed md:leading-\[1\.6\] mb-0\"/g,
  'className=\"font-inter font-normal text-black text-lg md:text-2xl leading-relaxed md:leading-[1.6] mb-0\"'
);

page = page.replace(
  /className=\"font-inter font-light text-zinc-400 group-hover:text-white text-lg md:text-2xl leading-relaxed md:leading-\[1\.6\] mt-4 md:mt-6 transition-colors duration-500\"/g,
  'className=\"font-inter font-normal text-zinc-400 group-hover:text-white text-lg md:text-2xl leading-relaxed md:leading-[1.6] mt-4 md:mt-6 transition-colors duration-500\"'
);

// Actually, we can just replace all `font-inter font-light` in P tags where we know it should be normal
page = page.replace(/font-inter font-light text-black/g, 'font-inter font-normal text-black');
page = page.replace(/font-inter font-light text-zinc-400/g, 'font-inter font-normal text-zinc-400');


fs.writeFileSync('src/app/page.tsx', page);
console.log('Fix 11 applied');
