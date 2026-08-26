const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Find the space for Claude's icon
const claudeIconRegex = /\{\/\*\s*Claude's icon will go here\s*\*\/\}/;

const ecosistemaIcon = `
                      <div className="w-full h-full flex justify-end items-center max-h-[300px] text-black">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full max-w-[250px] md:max-w-[350px] opacity-90 drop-shadow-2xl">
                          <circle cx="12" cy="12" r="3" />
                          <circle cx="5" cy="5" r="2" />
                          <circle cx="19" cy="5" r="2" />
                          <circle cx="5" cy="19" r="2" />
                          <circle cx="19" cy="19" r="2" />
                          <path d="M6.5 6.5l4 4M17.5 6.5l-4 4M6.5 17.5l4-4M17.5 17.5l-4-4" />
                        </svg>
                      </div>
`;

content = content.replace(claudeIconRegex, ecosistemaIcon);

fs.writeFileSync('src/app/page.tsx', content);
