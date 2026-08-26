const fs = require('fs');

let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add Footer import
code = code.replace(
  'import { ContactTrigger } from "@/components/ui/ContactTrigger";',
  'import { ContactTrigger } from "@/components/ui/ContactTrigger";\nimport { Footer } from "@/components/ui/Footer";'
);

// 2. Add Marquee
const marquee = `
          {/* MARQUEE SEPARATOR */}
          <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-b border-zinc-900">
            <div className="marquee-content flex whitespace-nowrap w-max">
              {[1,2,3,4].map((i) => (
                <div key={i} className="marquee-item flex items-center justify-center min-w-max">
                  <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                    DELOBSOLETOALRENDIMIENTO
                  </span>
                  <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1 mx-4 md:mx-8" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
`;
code = code.replace('</section>\n\n          {/* 2. EL ÍNDICE', '</section>\n' + marquee + '\n          {/* 2. EL ÍNDICE');

// 3. IA Hover bar
code = code.replace(
  '<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5B700] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-out z-10"></div>',
  '<div className={`absolute ${row.align === \'left\' ? \'left-0\' : \'right-0\'} top-0 bottom-0 w-1 bg-[#F5B700] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-out z-10`}></div>'
);

// 4. Footer replacement
const footerStart = code.indexOf('{/* FOOTER */}');
if (footerStart > -1) {
  const newCode = code.substring(0, footerStart) + '{/* FOOTER */}\n        <Footer />\n      </div>\n    </>\n  );\n}\n';
  fs.writeFileSync('src/app/page.tsx', newCode);
  console.log('page.tsx updated');
} else {
  console.log('Footer not found');
}
