const fs = require('fs');
const path = require('path');

function replaceFileContent(filePath, regex, replacement) {
  const fullPath = path.resolve(filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 1. Remove hash from subpage return links
const subpages = [
  'src/app/agentes/page.tsx',
  'src/app/desarrollo/page.tsx',
  'src/app/ecosistema/page.tsx',
  'src/app/identidad/page.tsx'
];

subpages.forEach(page => {
  replaceFileContent(page, /href="\/#hero"/g, 'href="/"');
});

// 2. Fix the logo in SmartHeader
let headerPath = 'src/components/ui/SmartHeader.tsx';
let headerContent = fs.readFileSync(headerPath, 'utf8');

headerContent = headerContent.replace(
  /<button type="button" aria-label="espín" className="flex items-center text-white opacity-50 hover:opacity-100 transition-opacity duration-500" onClick=\{[^}]+\}>/g,
  `<Link href="/" aria-label="espín" className="flex items-center text-white">`
);

// We must also replace the closing </button> of the logo with </Link>
// The logo is the first <button> in the SVG block
// Let's find the specific block
const logoRegex = /(<Link href="\/" aria-label="espín" className="flex items-center text-white">[\s\S]*?)<\/button>/;
headerContent = headerContent.replace(logoRegex, '$1</Link>');

fs.writeFileSync(headerPath, headerContent, 'utf8');
console.log('Updated SmartHeader.tsx');

// 3. Remove the line from page.tsx Hero
let homePath = 'src/app/page.tsx';
let homeContent = fs.readFileSync(homePath, 'utf8');

homeContent = homeContent.replace(
  /<div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-900 hidden md:block z-0"><\/div>/g,
  ''
);

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log('Updated page.tsx');

