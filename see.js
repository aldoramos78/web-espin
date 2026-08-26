const fs = require('fs');
const code = fs.readFileSync('src/app/desarrollo/page.tsx', 'utf8');
const lines = code.split('\n');
const start = lines.findIndex(l => l.includes('id="diagnostico"'));
console.log(lines.slice(start, start + 50).join('\n'));
