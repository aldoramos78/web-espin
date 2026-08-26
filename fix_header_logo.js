const fs = require('fs');
const path = require('path');

let headerPath = path.resolve('src/components/ui/SmartHeader.tsx');
let headerContent = fs.readFileSync(headerPath, 'utf8');

// Replace the <button...espín...> with <Link href="/"...>
const btnRegex = /<button type="button" aria-label="esp.n" className="flex items-center text-white opacity-50 hover:opacity-100 transition-opacity duration-500" onClick=\{[^}]+\}>/g;
headerContent = headerContent.replace(
  btnRegex,
  `<Link href="/" aria-label="espín" className="flex items-center text-white">`
);

// We need to replace the very FIRST occurrence of </button> AFTER the <Link href="/" aria-label="espín" className="flex items-center text-white">
// The safest way is to find the index of the Link tag, then find the index of the next </button>, and replace it.

const linkTag = `<Link href="/" aria-label="espín" className="flex items-center text-white">`;
const linkIndex = headerContent.indexOf(linkTag);

if (linkIndex !== -1) {
    const buttonCloseIndex = headerContent.indexOf('</button>', linkIndex);
    if (buttonCloseIndex !== -1) {
        headerContent = headerContent.substring(0, buttonCloseIndex) + '</Link>' + headerContent.substring(buttonCloseIndex + '</button>'.length);
    }
}

fs.writeFileSync(headerPath, headerContent, 'utf8');
console.log('Fixed SmartHeader logo link');
