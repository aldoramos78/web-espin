const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the Marquee separator block
const marqueeRegex = /\{\/\*\s*MARQUEE SEPARATOR\s*\*\/\}[\s\S]*?(?=\{\/\*\s*ECOSISTEMA COMPLETO\s*\*\/)/;

const newMarquee = `{/* MARQUEE SEPARATOR */}
          <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-y border-zinc-900">
            <div className="marquee-content flex whitespace-nowrap w-max" style={{ animationDuration: '40s' }}>
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="marquee-item flex items-center justify-center min-w-max">
                  <span className="font-clash font-bold text-transparent text-3xl md:text-5xl lg:text-[4.5rem] uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px #F5B700', color: 'transparent' }}> 
                    DELOBSOLETOALRENDIMIENTO
                  </span>
                  <span className="text-[#F5B700] text-3xl md:text-5xl lg:text-[4.5rem] font-bold mx-4 md:mx-8">*</span>
                </div>
              ))}
            </div>
          </div>

          `;

content = content.replace(marqueeRegex, newMarquee);

fs.writeFileSync('src/app/page.tsx', content);
