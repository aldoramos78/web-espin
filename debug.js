const fs = require('fs');
const path = require('path');
const target = path.join('src', 'app', 'agentes', 'page.tsx');
let code = fs.readFileSync(target, 'utf8');
const lines = code.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="protocolo"')) {
    console.log(lines.slice(i, i + 30).join('\n'));
    break;
  }
}
