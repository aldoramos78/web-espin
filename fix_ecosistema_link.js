const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const targetRegex = /<h3 className="font-clash font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl uppercase mb-6 text-black transition-colors duration-500">\s*ECOSISTEMA<br\/>COMPLETO\s*<\/h3>\s*<p className="font-inter font-light text-lg md:text-2xl text-black leading-relaxed max-w-3xl">\s*Identidad visual, plataforma web y automatización con IA\. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día\.\s*<\/p>/;

const replacement = `<Link href="/ecosistema" className="group/link block cursor-pointer">
                  <h3 className="font-clash font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl uppercase mb-6 text-black transition-colors duration-500 group-hover/link:opacity-80">
                    ECOSISTEMA<br/>COMPLETO
                  </h3>
                  <p className="font-inter font-light text-lg md:text-2xl text-black leading-relaxed max-w-3xl group-hover/link:opacity-80 transition-opacity">
                    Identidad visual, plataforma web y automatización con IA. Delegas toda la modernización de tu empresa en un solo equipo para liderar tu mercado desde el primer día.
                  </p>
                </Link>`;

content = content.replace(targetRegex, replacement);

fs.writeFileSync('src/app/page.tsx', content);
