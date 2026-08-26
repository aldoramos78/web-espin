const fs = require('fs');
let footer = fs.readFileSync('src/components/ui/Footer.tsx', 'utf8');
if (!footer.includes('"use client"')) {
  footer = '"use client";\n' + footer;
  fs.writeFileSync('src/components/ui/Footer.tsx', footer);
}
console.log('Done');
