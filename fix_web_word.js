const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  'title: "Desarrollo de Alto Rendimiento",',
  'title: "Desarrollo Web de Alto Rendimiento",'
);

fs.writeFileSync('src/app/page.tsx', content);
