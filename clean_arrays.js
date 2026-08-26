const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regexDolorData = /const dolorData = \[[\s\S]*?\];\s*/;
content = content.replace(regexDolorData, '');

const regexPilaresData = /const pilaresData = \[[\s\S]*?\];\s*/;
content = content.replace(regexPilaresData, '');

fs.writeFileSync('src/app/page.tsx', content);
console.log("Removed unused data arrays.");
