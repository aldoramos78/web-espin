const fs = require('fs');
const path = require('path');

// 1. Update HomeServiceBlock.tsx
let blockPath = path.resolve('src/components/ui/HomeServiceBlock.tsx');
let blockContent = fs.readFileSync(blockPath, 'utf8');

// Replace the h3 classes
blockContent = blockContent.replace(
  'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  'text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.1]'
);
fs.writeFileSync(blockPath, blockContent, 'utf8');
console.log('Updated HomeServiceBlock.tsx');

// 2. Update Ecosistema in page.tsx
let pagePath = path.resolve('src/app/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// The original string is:
// text-4xl sm:text-5xl md:text-5xl lg:text-6xl uppercase \n mb-6 text-black transition-colors duration-500 group-hover/link:opacity-80
// Since there might be newlines, we can use a regex.
const ecoRegex = /text-4xl sm:text-5xl md:text-5xl lg:text-6xl/g;
pageContent = pageContent.replace(ecoRegex, 'text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.1]');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log('Updated page.tsx');

