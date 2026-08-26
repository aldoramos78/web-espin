const fs = require('fs');
const path = require('path');

const files = [
    path.join('src', 'app', 'desarrollo', 'page.tsx'),
    path.join('src', 'app', 'agentes', 'page.tsx')
];

for (const f of files) {
    let code = fs.readFileSync(f, 'utf8');

    // Section 2
    code = code.replace(
        /<div className="flex items-center gap-4 mb-6 md:mb-8">\s*<div className="w-10 md:w-16 h-\[2px\] bg-\[#F5B700\]"><\/div>\s*<span className="font-michroma text-\[11px\] md:text-sm text-\[#F5B700\] tracking-widest uppercase">(02 \/ [^<]+)<\/span>\s*<\/div>\s*<div className="overflow-hidden mb-10 md:mb-20 pt-6 -mt-6">\s*<ScrollReveal variant="stagger">\s*<ScrollReveal variant="textReveal"[^>]*>[\s\S]*?<\/ScrollReveal>\s*<\/ScrollReveal>\s*<\/div>/g,
        `<div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                      <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                        $1
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>`
    );

    // Section 3
    code = code.replace(
        /<div className="flex items-center gap-4 mb-6 md:mb-8">\s*<div className="w-10 md:w-16 h-\[2px\] bg-\[#F5B700\]"><\/div>\s*<span className="font-michroma text-\[11px\] md:text-sm text-\[#F5B700\] tracking-widest uppercase">(03 \/ [^<]+)<\/span>\s*<\/div>\s*<div className="overflow-hidden mb-10 md:mb-20 max-w-full">\s*<ScrollReveal variant="stagger">\s*<ScrollReveal variant="textReveal"[^>]*>[\s\S]*?<\/ScrollReveal>\s*<\/ScrollReveal>\s*<\/div>/g,
        `<div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                      <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                        $1
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>`
    );

    // Section 4
    code = code.replace(
        /<div className="flex items-center gap-4 mb-6 md:mb-8">\s*<div className="w-10 md:w-16 h-\[2px\] bg-\[#F5B700\]"><\/div>\s*<span className="font-michroma text-\[11px\] md:text-sm text-\[#F5B700\] tracking-widest uppercase">(04 \/ [^<]+)<\/span>\s*<\/div>\s*<div className="overflow-hidden mb-10 md:mb-16">\s*<ScrollReveal variant="stagger">\s*<ScrollReveal variant="textReveal"[^>]*>[\s\S]*?<\/ScrollReveal>\s*<\/ScrollReveal>\s*<\/div>/g,
        `<div className="mb-10 md:mb-16 w-full">
                  <ScrollReveal variant="slideRight">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                      <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                        $1
                      </h2>
                    </div>
                  </ScrollReveal>
                </div>`
    );

    fs.writeFileSync(f, code);
}
console.log('Fixed headers 2,3,4');
