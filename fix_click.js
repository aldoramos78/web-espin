const fs = require('fs');
let code = fs.readFileSync('src/app/identidad/page.tsx', 'utf8');

code = code.replace(
  /<button\s+onClick=\{\(\) => document\.dispatchEvent\(new CustomEvent\('open-contact-modal'\)\)\}\s+className="group flex items-center justify-between w-full md:w-auto border border-zinc-800 bg-zinc-900\/50 hover:bg-\[#F5B700\] hover:border-\[#F5B700\] transition-all duration-500 rounded-full px-6 py-4 md:px-8 md:py-5 backdrop-blur-sm cursor-pointer"\s*>/,
  `<ContactTrigger className="w-full md:w-auto">
    <button className="group flex items-center justify-between w-full border border-zinc-800 bg-zinc-900/50 hover:bg-[#F5B700] hover:border-[#F5B700] transition-all duration-500 rounded-full px-6 py-4 md:px-8 md:py-5 backdrop-blur-sm cursor-pointer">`
);
code = code.replace(
  /<\/button>\s*<\/ScrollReveal>/,
  `</button>
                  </ContactTrigger>
                  </ScrollReveal>`
);

fs.writeFileSync('src/app/identidad/page.tsx', code);
