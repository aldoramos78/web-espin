const fs = require('fs');

// 1. UPDATE SMART HEADER LINKS
let header = fs.readFileSync('src/components/ui/SmartHeader.tsx', 'utf8');
header = header.replace(/href: "\/infraestructura"/g, 'href: "/desarrollo"');
header = header.replace(/href: "\/sistemas-autonomos"/g, 'href: "/agentes"');
header = header.replace(/href: "\/genesis"/g, 'href: "/identidad"');
fs.writeFileSync('src/components/ui/SmartHeader.tsx', header);

// 2. UPDATE FOOTER LINKS
let footer = fs.readFileSync('src/components/ui/Footer.tsx', 'utf8');
footer = footer.replace(/href: "\/infraestructura"/g, 'href: "/desarrollo"');
footer = footer.replace(/href: "\/sistemas-autonomos"/g, 'href: "/agentes"');
footer = footer.replace(/href: "\/genesis"/g, 'href: "/identidad"');
fs.writeFileSync('src/components/ui/Footer.tsx', footer);

// 3. UPDATE PAGE.TSX LINKS & MOBILE SIZING
let page = fs.readFileSync('src/app/page.tsx', 'utf8');
// Fix links
page = page.replace(/link: "\/infraestructura"/g, 'link: "/desarrollo"');
page = page.replace(/link: "\/sistemas-autonomos"/g, 'link: "/agentes"');
page = page.replace(/link: "\/genesis"/g, 'link: "/identidad"');

// Fix Lobby row titles for mobile
page = page.replace(/className=\"font-michroma uppercase text-3xl md:text-4xl lg:text-\[3\.5rem\]/g, 'className="font-michroma uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem]');

// Fix Marquee font size for mobile
page = page.replace(/className=\"font-michroma text-transparent text-3xl md:text-5xl lg:text-\[4\.5rem\]/g, 'className="font-michroma text-transparent text-2xl sm:text-3xl md:text-5xl lg:text-[4.5rem]');

// Fix Ecosistema title size for mobile
page = page.replace(/className=\"font-michroma uppercase text-4xl md:text-6xl lg:text-\[5\.5rem\]/g, 'className="font-michroma uppercase text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem]');

// Make Lobby rows text base size on mobile to save space
page = page.replace(/className=\"font-inter font-normal text-zinc-400 group-hover:text-white text-lg md:text-2xl/g, 'className="font-inter font-normal text-zinc-400 group-hover:text-white text-base md:text-2xl');

// Make Ecosistema text base size on mobile to save space
page = page.replace(/className=\"font-inter font-normal text-black text-lg md:text-2xl/g, 'className="font-inter font-normal text-black text-base md:text-2xl');

fs.writeFileSync('src/app/page.tsx', page);

// 4. UPDATE DESARROLLO PAGE
let desarrollo = fs.readFileSync('src/app/desarrollo/page.tsx', 'utf8');
// If there are specific fixes for desarrollo (like text sizes or layout), let's ensure the Hero title fits.
// We change INFRAESTRUCTURA to DESARROLLO just in case it's too big, or keep INFRAESTRUCTURA but adjust sizing.
// It uses `text-[8.5vw]`, which is fluid and responsive! But I will ensure it doesn't break.
// Wait, the user asked to change the paths, maybe I should also rename the Hero title of Desarrollo page to "DESARROLLO" to match the menu? Let's check what it has.
fs.writeFileSync('src/app/desarrollo/page.tsx', desarrollo);

console.log('Mobile fixes and renaming done.');
