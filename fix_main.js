const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Insert <main> after <HeaderAndModal />
content = content.replace(/<HeaderAndModal \/>\s*/, '<HeaderAndModal />\n        <main>\n');

// Insert </main> before MARQUEE SEPARATOR
content = content.replace(/\{\/\*\s*MARQUEE SEPARATOR \(Above footer\)\s*\*\/\}/, '        </main>\n\n        {/* MARQUEE SEPARATOR (Above footer) */}');

fs.writeFileSync('src/app/page.tsx', content);
