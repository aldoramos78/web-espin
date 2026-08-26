const fs = require('fs');
const path = require('path');

const pagePath = path.resolve('src/app/ecosistema/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Icon 1: Identidad (was spark)
const oldIcon1 = /<svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1\.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2\.286 6\.857L21 12l-5\.714 2\.143L13 21l-2\.286-6\.857L5 12l5\.714-2\.143L13 3z" \/><\/svg>/;
const newIcon1 = `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12"><path d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" /></svg>`;

// Icon 2: Infraestructura (was server)
const oldIcon2 = /<svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1\.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h\.01M17 16h\.01" \/><\/svg>/;
const newIcon2 = `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`;

// Icon 3: Automatizacion (was old cpu)
const oldIcon3 = /<svg aria-hidden="true" className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1\.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" \/><\/svg>/;
const newIcon3 = `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12"><path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-16.5v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>`;

content = content.replace(oldIcon1, newIcon1);
content = content.replace(oldIcon2, newIcon2);
content = content.replace(oldIcon3, newIcon3);

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Icons updated successfully');
