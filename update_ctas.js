const fs = require('fs');

// 1. desarrollo/page.tsx
let dev = fs.readFileSync('src/app/desarrollo/page.tsx', 'utf8');
dev = dev.replace(
  /<span>Solicitar Auditor.a<\/span>/,
  '<span>Solicitar Auditoría Web</span>'
);
fs.writeFileSync('src/app/desarrollo/page.tsx', dev);

// 2. agentes/page.tsx
let age = fs.readFileSync('src/app/agentes/page.tsx', 'utf8');
age = age.replace(
  /<span>Solicitar Auditor.a<\/span>/,
  '<span>Solicitar Auditoría IA</span>'
);
fs.writeFileSync('src/app/agentes/page.tsx', age);

console.log('CTAs updated');
