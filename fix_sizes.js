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

    // 1. Fix Stroke Overlaps by aggressively increasing tracking
    // Replace tracking-[0.05em] with tracking-[0.15em] in hero-stroke and marquees
    content = content.replace(/tracking-\[0\.05em\]/g, 'tracking-[0.15em]');

    // 2. Fix Section H2 Sizes (01 / EL PROBLEMA, etc.)
    // Old: text-[4.5vw] md:text-3xl lg:text-4xl
    // New: text-[7vw] sm:text-[6vw] md:text-4xl lg:text-5xl
    content = content.replace(/text-\[4\.5vw\] md:text-3xl lg:text-4xl/g, 'text-[7vw] sm:text-[5vw] md:text-4xl lg:text-5xl');

    // 3. Fix H3 Sizes inside Grid Cards
    // Old: text-lg md:text-base lg:text-xl xl:text-2xl
    // New: text-2xl md:text-xl lg:text-3xl xl:text-4xl
    content = content.replace(/text-lg md:text-base lg:text-xl xl:text-2xl/g, 'text-2xl md:text-xl lg:text-2xl xl:text-3xl');

    // 4. Ecosistema Subheaders (e.g. GOBERNANZA Y MANTENIMIENTO)
    // Old: text-[7vw] sm:text-3xl md:text-5xl lg:text-[4rem]
    // New: text-[8.5vw] sm:text-4xl md:text-5xl lg:text-[4.5rem]
    content = content.replace(/text-\[7vw\] sm:text-3xl md:text-5xl lg:text-\[4rem\]/g, 'text-[9vw] sm:text-4xl md:text-5xl lg:text-[4.5rem]');

    // 5. PhaseRow Numbers
    // Old: text-6xl md:text-8xl
    // New: text-[20vw] md:text-8xl
    content = content.replace(/text-6xl md:text-8xl/g, 'text-[20vw] md:text-9xl lg:text-[10rem]');

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});

console.log('Mobile first font sizes and aggressive tracking applied.');
