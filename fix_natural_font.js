const fs = require('fs');
const path = require('path');

// 1. Fix globals.css to restore marquee and hero-stroke base class
let globalsPath = path.join('src', 'app', 'globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');

// Ensure base hero-stroke exists
if (!globalsContent.includes('.hero-stroke {')) {
    // We lost it. Let's prepend it before the media queries
    globalsContent = globalsContent.replace(
        /@media \(min-width: 768px\) \{/g,
        `.hero-stroke {\n  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.95);\n  color: transparent;\n}\n@media (min-width: 768px) {`
    );
} else if (globalsContent.includes('.hero-stroke {') && !globalsContent.includes('color: transparent')) {
    // If it's corrupted
    globalsContent = globalsContent.replace(
        /\.hero-stroke \{[\s\S]*?\}/,
        `.hero-stroke {\n  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.95);\n  color: transparent;\n}`
    );
}

// Restore Marquee if missing
if (!globalsContent.includes('.marquee-container')) {
    globalsContent += `
/* ================= MARQUEE SEPARATOR ================= */
.marquee-container {
  width: 100%;
  overflow: hidden;
  background: black;
  border-bottom: 1px solid #18181b;
  padding: 1.5rem 0;
  display: flex;
  white-space: nowrap;
}
.marquee-content {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}
.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}
@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
.marquee-item {
  color: #a1a1aa;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 3rem;
}
.marquee-star {
  color: #F5B700;
  font-size: 1.2rem;
}
`;
}
fs.writeFileSync(globalsPath, globalsContent);


// 2. Strip ALL tracking rules from font-clash instances to let the font be 100% natural
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

    // We will find lines with font-clash and remove tracking-[any] and tracking-xxx
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('font-clash')) {
            // Remove tracking-widest, tracking-normal, tracking-tight, tracking-tighter, tracking-wide, tracking-[...]
            lines[i] = lines[i].replace(/\s?tracking-[a-z]+\s?/g, ' ');
            lines[i] = lines[i].replace(/\s?tracking-\[[^\]]+\]\s?/g, ' ');
            
            // Clean up double spaces caused by replacement
            lines[i] = lines[i].replace(/\s+/g, ' ');
        }
    }
    content = lines.join('\n');

    if (content !== original) {
        fs.writeFileSync(file, content);
    }
});

console.log('Restored marquee CSS, fixed hero-stroke base class, and stripped ALL tracking rules.');
