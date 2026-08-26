const fs = require('fs');
const path = require('path');
const targetPath = path.join('src', 'app', 'page.tsx');
let code = fs.readFileSync(targetPath, 'utf8');

// Number
code = code.replace(/className=\{`font-michroma text-\[35vw\] md:text-\[25vw\] leading-none transition-colors duration-700 \$\{hoveredRow === row\.id \? 'text-zinc-800' : 'text-zinc-900\/50'\}`\}/g, "className={`font-michroma text-[35vw] md:text-[25vw] leading-none transition-colors duration-700 text-zinc-800 md:text-zinc-900/50 md:group-hover:text-zinc-800`}");

// Hover grid
code = code.replace(/className=\{`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-0 pointer-events-none`\}/g, "className={`absolute inset-0 opacity-10 md:opacity-0 md:group-hover:opacity-10 transition-opacity duration-700 z-0 pointer-events-none`}");

// Yellow line
code = code.replace(/className=\{`absolute \$\{row\.align === 'left' \? 'left-0' : 'right-0'\} top-0 bottom-0 w-1 bg-\[#F5B700\] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-out z-10`\}/g, "className={`absolute ${row.align === 'left' ? 'left-0' : 'right-0'} top-0 bottom-0 w-1 bg-[#F5B700] scale-y-100 md:scale-y-0 md:group-hover:scale-y-100 origin-center transition-transform duration-500 ease-out z-10`}");

// Transform
code = code.replace(/className=\{`max-w-3xl transform \$\{row\.align === 'left' \? 'group-hover:translate-x-2 md:group-hover:translate-x-6' : 'group-hover:-translate-x-2 md:group-hover:-translate-x-6'\} transition-transform duration-700 ease-out`\}/g, "className={`max-w-3xl transform ${row.align === 'left' ? 'translate-x-2 md:translate-x-0 md:group-hover:translate-x-6' : '-translate-x-2 md:translate-x-0 md:group-hover:-translate-x-6'} transition-transform duration-700 ease-out`}");

// Title color
code = code.replace(/text-white group-hover:text-\[#F5B700\] transition-colors duration-500/g, "text-[#F5B700] md:text-white md:group-hover:text-[#F5B700] transition-colors duration-500");

// Desc color
code = code.replace(/text-zinc-400 group-hover:text-white text-base md:text-2xl leading-relaxed md:leading-\[1\.6\] mt-4 md:mt-6 transition-colors duration-500/g, "text-white md:text-zinc-400 md:group-hover:text-white text-base md:text-2xl leading-relaxed md:leading-[1.6] mt-4 md:mt-6 transition-colors duration-500");

// Tech log
code = code.replace(/className=\{`mt-6 font-mono text-\[10px\] md:text-xs text-\[#F5B700\] tracking-widest overflow-hidden transition-all duration-500 flex \$\{row\.align === 'left' \? 'justify-start' : 'justify-end'\} \$\{hoveredRow === row\.id \? 'max-h-12 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'\}`\}/g, "className={`mt-6 font-mono text-[10px] md:text-xs text-[#F5B700] tracking-widest overflow-hidden transition-all duration-500 flex ${row.align === 'left' ? 'justify-start' : 'justify-end'} max-h-12 opacity-100 translate-y-0 md:max-h-0 md:opacity-0 md:translate-y-4 md:group-hover:max-h-12 md:group-hover:opacity-100 md:group-hover:translate-y-0`}");

fs.writeFileSync(targetPath, code);
console.log('Fixed page.tsx mobile styling');
