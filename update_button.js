const fs = require('fs');
const path = require('path');

// 1. Update globals.css to make .rings-btn.small bigger on desktop
let globalsPath = path.join('src', 'app', 'globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');

// Replace the current .rings-btn.small block
globalsContent = globalsContent.replace(
    /\.rings-btn\.small\s*\{[^}]+\}/,
    `.rings-btn.small {
  padding: 8px 16px;
  font-size: 0.5rem;
  gap: 8px;
}
@media (min-width: 768px) {
  .rings-btn.small {
    padding: 12px 24px;
    font-size: 0.65rem;
    gap: 10px;
  }
}`
);
fs.writeFileSync(globalsPath, globalsContent);


// 2. Add extra top margin on mobile for the INICIO button in all inner pages
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) { 
            results.push(file);
        }
    });
    return results;
}

const files = walk('src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Search for the wrapper of the INICIO button.
    // It's typically: <div className="mb-8 md:mb-12"> ... <span>Inicio</span>
    // We will change it to: <div className="mt-8 md:mt-0 mb-8 md:mb-12">
    
    // We can just add mt-6 md:mt-0 to it.
    if (content.includes('<span>Inicio</span>') || content.includes('<span>INICIO</span>')) {
        content = content.replace(
            /<div className="mb-8 md:mb-12">(\s*<ScrollReveal[^>]*>\s*<Link href="[^"]*"[^>]*>\s*<button[^>]*className="rings-btn small")/g,
            '<div className="mt-12 md:mt-0 mb-8 md:mb-12">$1'
        );
        // Sometimes it might already have it or the regex might fail if spaces differ, let's be more robust
        content = content.replace(
            /<div className="mb-8 md:mb-12">(\s*<ScrollReveal[^>]*>\s*<Link href="[^"]*"(?:\s+className="[^"]*")?>\s*<button[^>]*className="rings-btn small")/g,
            '<div className="mt-10 md:mt-0 mb-8 md:mb-12">$1'
        );
    }

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});
console.log('Button scaling and spacing applied.');
