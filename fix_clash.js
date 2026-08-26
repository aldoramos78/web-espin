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

    // 1. Remove tracking-tighter globally (it was for Michroma)
    content = content.replace(/tracking-tighter/g, 'tracking-normal');
    // Also fix tracking-tight if used
    // content = content.replace(/tracking-tight/g, 'tracking-normal'); // maybe keep tracking-tight if intended? Let's stick to tighter

    // 2. Fix the extremely tight leading on H1s and other massive text
    content = content.replace(/leading-\[1\.05\]/g, 'leading-[1.15]');
    content = content.replace(/leading-\[0\.9\]/g, 'leading-[1.1]');
    content = content.replace(/leading-\[1\]/g, 'leading-[1.15]');
    content = content.replace(/leading-none/g, 'leading-[1.1]');

    // 3. Fix font weights: only H1 should be bold, others semibold
    // We previously injected "font-clash font-bold" everywhere. 
    // We want to change it to "font-clash font-semibold" ONLY on non-h1 tags.
    // It's safer to just change ALL to semibold, and then specifically target <h1 to change back to bold.
    content = content.replace(/font-clash font-bold/g, 'font-clash font-semibold');
    
    // Now revert <h1... font-clash font-semibold to font-clash font-bold
    content = content.replace(/<h1([^>]*)font-clash font-semibold/g, '<h1$1font-clash font-bold');

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});

console.log('Fixed tracking, leading, and weights.');
