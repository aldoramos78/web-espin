const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// The wrapper for the text block:
const regexEco = /<div className=\"relative z-10 px-6 md:px-32 py-8 md:py-10 w-full flex flex-col items-center\">([\s\S]*?)<div className=\"mt-10 md:mt-16 flex justify-center w-full transform group-hover:translate-y-\[-4px\] transition-transform duration-700 ease-out\">([\s\S]*?)<\/button>\s*<\/div>\s*<\/div>/;

const newEcoBlock = `<div className="relative z-10 px-6 md:px-32 py-12 md:py-16 w-full flex flex-col items-center">
$1
                        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 w-full flex justify-center group-hover:translate-y-[-4px] transition-transform duration-700 ease-out z-20">
$2</button>
                        </div>
                    </div>`;

if (regexEco.test(page)) {
    page = page.replace(regexEco, newEcoBlock);
} else {
    // manual fallback
    page = page.replace(/<div className=\"mt-10 md:mt-16 flex justify-center w-full transform group-hover:translate-y-\[-4px\] transition-transform duration-700 ease-out\">/g, '<div className=\"absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 w-full flex justify-center group-hover:translate-y-[-4px] transition-transform duration-700 ease-out z-20\">');
}

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fix 9 applied');
