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

    // 1. Fix horizontal overlaps in text-stroke (tracking)
    // Find any className that has "hero-stroke" or is a "marquee-item" and ensure it has tracking-widest
    // Actually, we can just replace tracking-normal with tracking-[0.05em] or tracking-widest wherever hero-stroke is used.
    // Let's replace `tracking-normal` with `tracking-[0.05em]` if it's a stroked header.
    if (content.includes('hero-stroke')) {
        content = content.replace(/className="hero-stroke ([^"]*)tracking-normal/g, 'className="hero-stroke $1tracking-[0.05em]');
    }

    // 2. Fix marquee tracking
    if (content.includes('marquee-item') || content.includes('CONFIANZA INMEDIATA') || content.includes('DELOBSOLETOALRENDIMIENTO')) {
        content = content.replace(/tracking-normal/g, 'tracking-[0.05em]');
    }

    // 3. Relax the vertical leading on the Home H1 even more just in case (1.15 -> 1.2)
    if (file.includes('page.tsx')) {
        content = content.replace(/leading-\[1\.15\]/g, 'leading-[1.2]');
    }

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});

console.log('Fixed stroke overlapping and further relaxed leading.');
