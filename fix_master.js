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

    // 1. REVERT tracking hack globally
    content = content.replace(/tracking-\[0\.15em\]/g, 'tracking-normal');
    // For marquees we might want slight tracking but let's stick to tracking-normal to prevent any weird separation.
    
    // 2. Fix globals.css stroke hack
    if (file.includes('globals.css')) {
        content = content.replace(
            /\.hero-stroke \{[\s\S]*?-webkit-text-stroke: 1px rgba\(255, 255, 255, 0\.95\);[\s\S]*?color: transparent;[\s\S]*?\}/,
            `.hero-stroke {\n  color: #0A0A0A;\n  text-shadow: \n    -1px -1px 0 rgba(255,255,255,0.95),\n     1px -1px 0 rgba(255,255,255,0.95),\n    -1px  1px 0 rgba(255,255,255,0.95),\n     1px  1px 0 rgba(255,255,255,0.95);\n}`
        );
        content = content.replace(
            /@media \(min-width: 768px\) \{[\s\S]*?\.hero-stroke \{[\s\S]*?-webkit-text-stroke: 2px rgba\(255, 255, 255, 0\.95\);[\s\S]*?\}[\s\S]*?\}/,
            `@media (min-width: 768px) {\n  .hero-stroke {\n    text-shadow: \n      -2px -2px 0 rgba(255,255,255,0.95),\n       2px -2px 0 rgba(255,255,255,0.95),\n      -2px  2px 0 rgba(255,255,255,0.95),\n       2px  2px 0 rgba(255,255,255,0.95),\n       0 -2px 0 rgba(255,255,255,0.95),\n       0  2px 0 rgba(255,255,255,0.95),\n      -2px  0 0 rgba(255,255,255,0.95),\n       2px  0 0 rgba(255,255,255,0.95);\n  }\n}`
        );
        content = content.replace(
            /@media \(min-width: 1280px\) \{[\s\S]*?\.hero-stroke \{[\s\S]*?-webkit-text-stroke: 3px rgba\(255, 255, 255, 0\.95\);[\s\S]*?\}[\s\S]*?\}/,
            `@media (min-width: 1280px) {\n  .hero-stroke {\n    text-shadow: \n      -3px -3px 0 rgba(255,255,255,0.95),\n       3px -3px 0 rgba(255,255,255,0.95),\n      -3px  3px 0 rgba(255,255,255,0.95),\n       3px  3px 0 rgba(255,255,255,0.95),\n       0 -3px 0 rgba(255,255,255,0.95),\n       0  3px 0 rgba(255,255,255,0.95),\n      -3px  0 0 rgba(255,255,255,0.95),\n       3px  0 0 rgba(255,255,255,0.95);\n  }\n}`
        );
    }

    // 3. Fix PhaseRow.tsx
    if (file.includes('PhaseRow.tsx')) {
        content = content.replace(
            /style=\{\{ WebkitTextStroke: "2px #F5B700", color: "transparent", opacity: numOpacity \}\}/g,
            `style={{ textShadow: "-2px -2px 0 #F5B700, 2px -2px 0 #F5B700, -2px 2px 0 #F5B700, 2px 2px 0 #F5B700, 0 -2px 0 #F5B700, 0 2px 0 #F5B700, -2px 0 0 #F5B700, 2px 0 0 #F5B700", color: "#0A0A0A", opacity: numOpacity }}`
        );
        // Fix the title size for PhaseRow (e.g. DEMOLICIÓN Y ARQUITECTURA)
        content = content.replace(
            /text-xl md:text-3xl/g,
            'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
        );
    }

    // 4. Fix Section H2 Titles (Make them thin and elegant)
    // Previously changed to: font-semibold text-[7vw] sm:text-[5vw] md:text-4xl lg:text-5xl
    content = content.replace(/font-clash font-semibold text-\[7vw\] sm:text-\[5vw\] md:text-4xl lg:text-5xl/g, 'font-clash font-light text-[4.5vw] md:text-2xl lg:text-3xl');
    
    // Also catch the previous state if I missed it
    content = content.replace(/font-clash font-semibold text-\[4\.5vw\] md:text-3xl lg:text-4xl/g, 'font-clash font-light text-[4.5vw] md:text-2xl lg:text-3xl');

    // 5. Fix Case Study H3 Titles (Flota Marítima, etc.)
    // Old: text-xl md:text-2xl text-white mb-4 uppercase font-clash font-semibold
    content = content.replace(/text-xl md:text-2xl text-white mb-4 uppercase font-clash font-semibold/g, 'text-2xl sm:text-3xl md:text-4xl text-white mb-6 uppercase font-clash font-semibold');

    // 6. Fix CONFIANZA INMEDIATA inline stroke hack in identidad/page.tsx
    if (file.includes('identidad') || file.includes('ecosistema') || file.includes('page.tsx')) {
        content = content.replace(
            /style=\{\{ WebkitTextStroke: '1px rgba\(255,255,255,0\.4\)', color: 'transparent' \}\}/g,
            `style={{ textShadow: "-1px -1px 0 rgba(255,255,255,0.4), 1px -1px 0 rgba(255,255,255,0.4), -1px 1px 0 rgba(255,255,255,0.4), 1px 1px 0 rgba(255,255,255,0.4)", color: "#0A0A0A" }}`
        );
    }

    // 7. Fix Ecosistema Subheaders just in case they got too big
    // Old: text-[9vw] sm:text-4xl md:text-5xl lg:text-[4.5rem]
    // They are probably fine, but if not we can tone it down. 9vw might be huge. Let's make it 8vw.
    content = content.replace(/text-\[9vw\]/g, 'text-[8vw]');

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});

console.log('All requested fixes applied.');
