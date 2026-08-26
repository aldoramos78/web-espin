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

    // 1. Fix Section Headers (01 / EL PROBLEMA) - They want it SMALLER (-)
    // Current: text-[4.5vw] md:text-3xl lg:text-4xl
    // New: text-[4vw] sm:text-lg md:text-2xl lg:text-3xl
    content = content.replace(/text-\[4\.5vw\] md:text-3xl lg:text-4xl/g, 'text-[4vw] sm:text-lg md:text-2xl lg:text-3xl');

    // 2. Fix Grid Card Titles (SISTEMA EXPUESTO) - They want it LARGER (+)
    // Current: text-lg md:text-base lg:text-xl xl:text-2xl
    // New: text-2xl md:text-2xl lg:text-3xl xl:text-4xl (to be large but not wrap crazy on mobile)
    content = content.replace(/text-lg md:text-base lg:text-xl xl:text-2xl/g, 'text-2xl md:text-2xl lg:text-3xl xl:text-4xl');

    // 3. Fix PhaseRow Titles (DEMOLICIÓN Y ARQUITECTURA) - They want it LARGER (+)
    if (file.includes('PhaseRow.tsx')) {
        // Current: text-xl md:text-3xl
        // New: text-3xl sm:text-4xl md:text-5xl lg:text-[4rem]
        content = content.replace(/text-xl md:text-3xl/g, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl');
    }

    // 4. Fix Case Study H3 Titles (FLOTA MARÍTIMA COMERCIAL) - They want it LARGER (+)
    // Current: text-xl md:text-2xl text-white mb-4 uppercase font-clash font-semibold
    // New: text-2xl sm:text-3xl md:text-4xl text-white mb-6 uppercase font-clash font-semibold
    content = content.replace(/text-xl md:text-2xl text-white mb-4 uppercase font-clash font-semibold/g, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 uppercase font-clash font-semibold');

    // 5. Fix H1 Leading. It's overlapping vertically in their screenshot because the lines have NO leading.
    // We add leading-[1.05] ONLY to the giant H1s to ensure they don't overlap, which was the original state.
    // E.g. <h1 className="hero-stroke font-clash font-bold uppercase tracking-normal mb-8 md:mb-12 text-[10vw] sm:text-[8vw] md:text-6xl lg:text-[5rem] xl:text-[6rem] break-words flex flex-col...
    // We'll just replace `flex flex-col` with `leading-[1.05] flex flex-col` in all H1s.
    if (content.includes('<h1')) {
        content = content.replace(/flex flex-col/g, 'leading-[1.1] md:leading-[1.1] flex flex-col');
        // Prevent double insertion if script runs twice
        content = content.replace(/leading-\[1\.1\] md:leading-\[1\.1\] leading-\[1\.1\] md:leading-\[1\.1\]/g, 'leading-[1.1] md:leading-[1.1]');
    }

    // 6. Ensure Marquees (Banner effect) look wide and elegant as Michroma used to.
    // We will add tracking-widest to them so they are not squished.
    // The "CONFIANZA INMEDIATA" banner
    content = content.replace(/text-3xl md:text-5xl lg:text-\[4\.5rem\] tracking-normal/g, 'text-3xl md:text-5xl lg:text-[4.5rem] tracking-widest');

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});

console.log('Applied exact size adjustments based on user red markings.');
