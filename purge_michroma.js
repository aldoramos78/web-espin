const fs = require('fs');
const path = require('path');

// 1. Update globals.css
let cssPath = 'src/app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(/--font-michroma: var\(--font-michroma\), sans-serif;/g, '--font-clash: var(--font-clash), sans-serif;');
css = css.replace(/font-family:var\(--font-michroma\),sans-serif;/g, 'font-family:var(--font-inter),sans-serif;');
css = css.replace(/font-family: var\(--font-michroma\), sans-serif;/g, 'font-family: var(--font-inter), sans-serif;');

fs.writeFileSync(cssPath, css);
console.log('Updated globals.css');

// 2. Globally replace font-michroma in all .tsx files
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
let replacedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('font-michroma')) {
        // Replace font-michroma with font-clash font-bold
        // Adding font-bold because Clash Display is variable and defaults to 400, while Michroma was implicitly thick. 
        // User requested bold for H1s, so adding font-bold globally where michroma was used is a safe bet for headings.
        let newContent = content.replace(/font-michroma/g, 'font-clash font-bold');
        fs.writeFileSync(file, newContent);
        replacedCount++;
    }
});

console.log(`Replaced font-michroma in ${replacedCount} files.`);
