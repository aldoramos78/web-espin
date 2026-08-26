const fs = require('fs');
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldButtonRegex = /<button type="button" className="relative inline-flex items-center gap-4 px-10 py-5 border border-black bg-black rounded-full font-michroma text-xs tracking-\[0\.2em\] uppercase text-\[#F5B700\] hover:bg-transparent hover:text-black transition-colors duration-500">[\s\S]*?<\/button>/;

const newButton = `<button type="button" className="rings-btn black">
                            <i></i><i></i><i></i>
                            <span>Solicitar Acceso</span>
                            <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                          </button>`;

if (oldButtonRegex.test(page)) {
    page = page.replace(oldButtonRegex, newButton);
    fs.writeFileSync('src/app/page.tsx', page);
    console.log('page.tsx button replaced');
} else {
    console.log('Regex did not match button in page.tsx');
}
