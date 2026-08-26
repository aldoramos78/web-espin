const fs = require('fs');

let header = fs.readFileSync('src/components/ui/SmartHeader.tsx', 'utf8');

const regex = /<Link href="\/#hero" aria-label="esp.n" className="flex items-center text-white hover:text-zinc-300 transition-colors" onClick=\{\(e\) => \{ if\(typeof window !== 'undefined' && window\.location\.pathname === '\/'\) \{ e\.preventDefault\(\); window\.scrollTo\(\{top: 0, behavior: 'smooth'\}\); \} \}\}>/;

const replacement = `<button type="button" aria-label="espín" className="flex items-center text-white hover:text-zinc-300 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>`;

if (regex.test(header)) {
    header = header.replace(regex, replacement);
    // Also need to close the tag. The tag closed is </Link>, we need to change it to </button>
    // Only the first </Link> after the SVG
    const linkCloseRegex = /<\/svg>\s*<\/Link>/;
    header = header.replace(linkCloseRegex, `</svg>\n            </button>`);
    fs.writeFileSync('src/components/ui/SmartHeader.tsx', header);
    console.log('SmartHeader updated successfully.');
} else {
    console.log('Regex did not match in SmartHeader.');
}
