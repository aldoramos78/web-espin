const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The problematic nested structure is:
// {/* RIGHT SIDE SPACE FOR CLAUDE ICON */}
// <div className="w-full md:w-1/2 flex justify-end items-center pointer-events-auto min-h-[200px]">
//
// {/* ICON FOR ECOSISTEMA (Mobile: Background, Desktop: Right side black) */}
// <div className="absolute inset-0 md:inset-auto md:relative w-full md:w-1/2 flex justify-center md:justify-end items-center pointer-events-none md:pointer-events-auto -z-10 md:z-10">

// Let's replace the whole right side block with a clean structure
const rightSideRegex = /\{\/\*\s*RIGHT SIDE SPACE FOR CLAUDE ICON\s*\*\/\}[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const newRightSide = `{/* RIGHT SIDE SPACE FOR CLAUDE ICON */}
                  <div className="absolute inset-0 md:inset-auto md:relative w-full md:w-5/12 flex justify-center md:justify-end items-center pointer-events-none md:pointer-events-auto -z-10 md:z-10 md:pr-12">
                      <div className="w-[80vw] h-[80vw] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] text-black opacity-5 md:opacity-90 md:drop-shadow-2xl flex items-center justify-center shrink-0">
                        <svg viewBox="3 3 18 18" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                          <circle cx="12" cy="8" r="5" />
                          <circle cx="8.5" cy="14" r="5" />
                          <circle cx="15.5" cy="14" r="5" />
                        </svg>
                      </div>
                  </div>
`;

content = content.replace(rightSideRegex, newRightSide);

fs.writeFileSync('src/app/page.tsx', content);
