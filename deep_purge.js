const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) { 
            results.push(file);
        }
    });
    return results;
}

const files = walk('src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Manifiesto - Replace explicit mention of Michroma
    if (file.includes('manifiesto')) {
        content = content.replace(/MICHROMA/g, 'CLASH DISPLAY');
        // Let's also rewrite the reasoning if needed, but "geometría extendida y fría" works for Clash as well (it's a neo-grotesque display).
        content = content.replace(/geometría extendida y fría/g, 'geometría brutalista y precisa');
    }

    // 2. Fix tracking-tight globally on Clash Display. 
    // Just in case it's on any Clash headers
    content = content.replace(/font-clash([^>]*?)tracking-tight /g, 'font-clash$1tracking-normal ');
    content = content.replace(/font-clash([^>]*?)tracking-tight"/g, 'font-clash$1tracking-normal"');
    
    // 3. Relax all leading-[1.1] to leading-[1.2] to accommodate Spanish accents in Clash Display
    content = content.replace(/leading-\[1\.1\]/g, 'leading-[1.2]');
    content = content.replace(/leading-\[1\.15\]/g, 'leading-[1.2]');

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});

console.log('Deep purge complete.');
