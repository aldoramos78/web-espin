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
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) { 
            results.push(file);
        }
    });
    return results;
}

const files = walk('src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. REVERT globals.css stroke hack to transparent
    if (file.includes('globals.css')) {
        content = content.replace(
            /\.hero-stroke \{\s*color: #0A0A0A;\s*text-shadow:[\s\S]*?\}/,
            `.hero-stroke {\n  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.95);\n  color: transparent;\n}`
        );
        content = content.replace(
            /@media \(min-width: 768px\) \{\s*\.hero-stroke \{\s*text-shadow:[\s\S]*?\}\s*\}/,
            `@media (min-width: 768px) {\n  .hero-stroke {\n    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.95);\n  }\n}`
        );
        content = content.replace(
            /@media \(min-width: 1280px\) \{\s*\.hero-stroke \{\s*text-shadow:[\s\S]*?\}\s*\}/,
            `@media (min-width: 1280px) {\n  .hero-stroke {\n    -webkit-text-stroke: 3px rgba(255, 255, 255, 0.95);\n  }\n}`
        );
    }

    // 2. Remove all `leading-*` from font-clash instances to let it breathe naturally.
    // Instead of complex regex matching exactly the tag, we will just delete `leading-[X]` and `leading-none/tight/snug/relaxed` 
    // from lines that contain `font-clash`.
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('font-clash')) {
            lines[i] = lines[i].replace(/ leading-\[[\d\.]+\]/g, '');
            lines[i] = lines[i].replace(/ md:leading-\[[\d\.]+\]/g, '');
            lines[i] = lines[i].replace(/ lg:leading-\[[\d\.]+\]/g, '');
            lines[i] = lines[i].replace(/ leading-(none|tight|snug|normal|relaxed|loose)/g, '');
            lines[i] = lines[i].replace(/ md:leading-(none|tight|snug|normal|relaxed|loose)/g, '');
            lines[i] = lines[i].replace(/ lg:leading-(none|tight|snug|normal|relaxed|loose)/g, '');
        }
    }
    content = lines.join('\n');

    // 3. Revert PhaseRow inline text shadow back to transparent
    if (file.includes('PhaseRow.tsx')) {
        content = content.replace(
            /style=\{\{ textShadow: "-2px -2px 0 #F5B700.*?", color: "#0A0A0A", opacity: numOpacity \}\}/g,
            `style={{ WebkitTextStroke: "2px #F5B700", color: "transparent", opacity: numOpacity }}`
        );
        // Revert sizes of PhaseRow 
        content = content.replace(/text-2xl sm:text-3xl md:text-4xl lg:text-5xl/g, 'text-xl md:text-3xl');
        content = content.replace(/text-\[20vw\] md:text-9xl lg:text-\[10rem\]/g, 'text-6xl md:text-8xl');
    }

    // 4. Revert Identidad / Ecosistema marquees
    content = content.replace(
        /style=\{\{ textShadow: "-1px -1px 0 rgba\(255,255,255,0\.4\).*?", color: "#0A0A0A" \}\}/g,
        `style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}`
    );

    // 5. Revert sizes
    // Section headers: text-[4.5vw] md:text-2xl lg:text-3xl -> font-clash font-light text-[4.5vw] md:text-3xl lg:text-4xl
    // Wait, the user said they liked them "thin and elegant". They originally were: 
    // `text-[4.5vw] md:text-3xl lg:text-4xl text-[#F5B700]`.
    content = content.replace(/font-clash font-light text-\[4\.5vw\] md:text-2xl lg:text-3xl/g, 'font-clash font-light text-[4.5vw] md:text-3xl lg:text-4xl');

    // Case Study H3 Titles
    // They were: text-xl md:text-2xl text-white mb-4 uppercase font-clash font-semibold
    content = content.replace(/text-2xl sm:text-3xl md:text-4xl text-white mb-6 uppercase font-clash font-semibold/g, 'text-xl md:text-2xl text-white mb-4 uppercase font-clash font-semibold');

    // H3 Grid Card Titles
    // Revert from: text-2xl md:text-xl lg:text-2xl xl:text-3xl
    content = content.replace(/text-2xl md:text-xl lg:text-2xl xl:text-3xl/g, 'text-lg md:text-base lg:text-xl xl:text-2xl');

    // Ecosistema Subheaders
    content = content.replace(/text-\[8vw\] sm:text-4xl md:text-5xl lg:text-\[4\.5rem\]/g, 'text-[7vw] sm:text-3xl md:text-5xl lg:text-[4rem]');
    content = content.replace(/text-\[9vw\] sm:text-4xl md:text-5xl lg:text-\[4\.5rem\]/g, 'text-[7vw] sm:text-3xl md:text-5xl lg:text-[4rem]');

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});

console.log('Reverted to static font approach, natural leading, and original elegant sizing.');
