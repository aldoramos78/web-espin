const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Find the Ecosistema icon block
const ecosistemaIconRegex = /<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full max-w-\[250px\] md:max-w-\[350px\]">[^]*?<\/svg>/;

const newEcosistemaIcon = `<svg viewBox="2 2 20 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                          <circle cx="12" cy="8" r="5" />
                          <circle cx="8.5" cy="14" r="5" />
                          <circle cx="15.5" cy="14" r="5" />
                        </svg>`;

content = content.replace(ecosistemaIconRegex, newEcosistemaIcon);

fs.writeFileSync('src/app/page.tsx', content);
