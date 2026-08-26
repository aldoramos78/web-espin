const fs = require('fs');
const path = require('path');
const target = path.join('src', 'app', 'desarrollo', 'page.tsx');
let code = fs.readFileSync(target, 'utf8');

code = code.replace(/<ScrollReveal variant="slideRight">\s*<div className="flex items-center gap-3 md:gap-4">\s*<div className="w-8 md:w-16 h-\[2px\] bg-\[#F5B700\] shrink-0"><\/div>\s*<h2 className="font-michroma text-\[4\.5vw\] md:text-3xl lg:text-4xl text-\[#F5B700\] tracking-widest uppercase whitespace-nowrap">\s*01 \/ [^<]+\s*<\/h2>\s*<\/div>\s*<\/ScrollReveal>\s*<\/div>/, (match) => match + '\n              </div>');

// Add </ScrollReveal> back where needed
code = code.replace(/<\/div>\n\s*<\/section>/, '</div>\n            </ScrollReveal>\n          </section>');
fs.writeFileSync(target, code);

const target2 = path.join('src', 'app', 'agentes', 'page.tsx');
let code2 = fs.readFileSync(target2, 'utf8');
code2 = code2.replace(/<ScrollReveal variant="slideRight">\s*<div className="flex items-center gap-3 md:gap-4">\s*<div className="w-8 md:w-16 h-\[2px\] bg-\[#F5B700\] shrink-0"><\/div>\s*<h2 className="font-michroma text-\[4\.5vw\] md:text-3xl lg:text-4xl text-\[#F5B700\] tracking-widest uppercase whitespace-nowrap">\s*01 \/ [^<]+\s*<\/h2>\s*<\/div>\s*<\/ScrollReveal>\s*<\/div>/, (match) => match + '\n              </div>');

code2 = code2.replace(/<\/div>\n\s*<\/section>/, '</div>\n            </ScrollReveal>\n          </section>');
fs.writeFileSync(target2, code2);
