const fs = require('fs');

// 1. Add id="hero" to page.tsx's first section
let home = fs.readFileSync('src/app/page.tsx', 'utf8');
home = home.replace(
  /{(\/\* 1\. HERO SECTION \*\/)}\s*<section className="min-h-\[100vh\] flex flex-col justify-center/,
  '{$1}\n        <section id="hero" className="min-h-[100vh] flex flex-col justify-center'
);
fs.writeFileSync('src/app/page.tsx', home);

// 2. Fix SmartHeader logo link
let header = fs.readFileSync('src/components/ui/SmartHeader.tsx', 'utf8');
header = header.replace(
  /<Link href="\/" aria-label="esp.n" className="flex items-center text-white hover:text-zinc-300 transition-colors">/,
  `<Link href="/#hero" aria-label="espín" className="flex items-center text-white hover:text-zinc-300 transition-colors" onClick={(e) => { if(typeof window !== 'undefined' && window.location.pathname === '/') { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); } }}>`
);
fs.writeFileSync('src/components/ui/SmartHeader.tsx', header);

// 3. Inject Back button in internal pages
const pages = [
  'src/app/desarrollo/page.tsx',
  'src/app/agentes/page.tsx',
  'src/app/identidad/page.tsx',
  'src/app/ecosistema/page.tsx',
  'src/app/manifiesto/page.tsx'
];

const backButtonCode = `
            <div className="mb-8 md:mb-12">
              <ScrollReveal delay={0.1}>
                <Link href="/#hero" className="inline-block">
                  <button type="button" className="rings-btn small">
                    <i></i><i></i><i></i>
                    <span>← Inicio</span>
                  </button>
                </Link>
              </ScrollReveal>
            </div>
`;

pages.forEach(pagePath => {
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Make sure we have id="hero" on the first section too, just for cleanliness
    content = content.replace(
      /{(\/\* 1\. HERO SECTION \*\/)}\s*<section className="/,
      '{$1}\n        <section id="hero" className="'
    );
    
    // Inject the back button right before the h1
    content = content.replace(
      /<h1 className="font-michroma uppercase/,
      backButtonCode + '\n            <h1 className="font-michroma uppercase'
    );
    
    fs.writeFileSync(pagePath, content);
  }
});

console.log('All pages updated with back button and header fixed.');
