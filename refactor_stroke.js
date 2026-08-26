const fs = require('fs');

const pages = [
  'src/app/desarrollo/page.tsx',
  'src/app/agentes/page.tsx',
  'src/app/identidad/page.tsx',
  'src/app/ecosistema/page.tsx'
];

pages.forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Remove the inline style and add hero-stroke class
    content = content.replace(
      /style=\{\{ WebkitTextStroke: '2px rgba\(255,255,255,0\.95\)', color: 'transparent' \}\} className="/g,
      'className="hero-stroke '
    );
    
    fs.writeFileSync(p, content);
  }
});
console.log('Removed inline stroke style, added hero-stroke class.');
