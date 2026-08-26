const fs = require('fs');

let eco = fs.readFileSync('src/app/ecosistema/page.tsx', 'utf8');

const oldCierreRegex = /<section id="cierre" className="px-6 md:px-12 pt-24 pb-24 md:pt-32 md:pb-32 bg-black relative">\s*<div className="max-w-5xl mx-auto flex flex-col items-center text-center">/g;

const newCierre = `<section id="cierre" className="px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32 bg-black relative">
          <ScrollReveal variant="stagger" className="w-full">
            <div className="mb-10 md:mb-20 w-full md:w-[80%]">
              <div className="mb-10 md:mb-16 w-full">
                <ScrollReveal variant="slideRight">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
                    <h2 className="font-michroma text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700] tracking-widest uppercase whitespace-nowrap">
                      03 / LA DECISIÓN
                    </h2>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center mt-12 md:mt-24">`;

eco = eco.replace(oldCierreRegex, newCierre);

// Also need to close the <ScrollReveal variant="stagger" className="w-full"> that was opened
eco = eco.replace(
  /<\/ContactTrigger>\s*<\/ScrollReveal>\s*<\/div>\s*<\/section>/,
  `</ContactTrigger>\n              </ScrollReveal>\n            </div>\n          </ScrollReveal>\n        </section>`
);

fs.writeFileSync('src/app/ecosistema/page.tsx', eco);
console.log('Replaced');
