const fs = require('fs');
const path = require('path');
const targetPath = path.join('src', 'app', 'page.tsx');
let code = fs.readFileSync(targetPath, 'utf8');

// Replace the specific mobile fixes that used md: with lg:
code = code.replace(/text-zinc-800 md:text-zinc-900\/50 md:group-hover:text-zinc-800/g, "text-zinc-800 lg:text-zinc-900/50 lg:group-hover:text-zinc-800");

code = code.replace(/opacity-10 md:opacity-0 md:group-hover:opacity-10/g, "opacity-10 lg:opacity-0 lg:group-hover:opacity-10");

code = code.replace(/scale-y-100 md:scale-y-0 md:group-hover:scale-y-100/g, "scale-y-100 lg:scale-y-0 lg:group-hover:scale-y-100");

// For transform it's a bit tricky because it had md:translate-x-0
code = code.replace(/translate-x-2 md:translate-x-0 md:group-hover:translate-x-6/g, "translate-x-2 lg:translate-x-0 lg:group-hover:translate-x-6");
code = code.replace(/-translate-x-2 md:translate-x-0 md:group-hover:-translate-x-6/g, "-translate-x-2 lg:translate-x-0 lg:group-hover:-translate-x-6");

code = code.replace(/text-\[#F5B700\] md:text-white md:group-hover:text-\[#F5B700\]/g, "text-[#F5B700] lg:text-white lg:group-hover:text-[#F5B700]");

code = code.replace(/text-white md:text-zinc-400 md:group-hover:text-white/g, "text-white lg:text-zinc-400 lg:group-hover:text-white");

code = code.replace(/max-h-12 opacity-100 translate-y-0 md:max-h-0 md:opacity-0 md:translate-y-4 md:group-hover:max-h-12 md:group-hover:opacity-100 md:group-hover:translate-y-0/g, "max-h-12 opacity-100 translate-y-0 lg:max-h-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:max-h-12 lg:group-hover:opacity-100 lg:group-hover:translate-y-0");

fs.writeFileSync(targetPath, code);
console.log('Fixed page.tsx breakpoints');
