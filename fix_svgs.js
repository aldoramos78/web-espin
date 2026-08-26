const fs = require('fs');

const files = [
  'src/app/page.tsx', 
  'src/app/agentes/page.tsx', 
  'src/app/desarrollo/page.tsx', 
  'src/components/ui/Footer.tsx', 
  'src/components/ui/SmartHeader.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<svg (?![^>]*aria-hidden)(?![^>]*aria-label)/g, '<svg aria-hidden="true" ');
    fs.writeFileSync(file, content);
  }
}
console.log('Fixed SVGs');
