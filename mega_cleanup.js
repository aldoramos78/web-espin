const fs = require('fs');
const path = require('path');

const srcApp = path.join('src', 'app');

function deepClean(file, title, desc) {
    let content = fs.readFileSync(file, 'utf8');

    // Remove Preloader
    content = content.replace(/import { PreloaderManager } from "@\/components\/ui\/PreloaderManager";\n/g, '');
    content = content.replace(/\s*<PreloaderManager \/>\n/g, '\n');

    // Replace dolor terms
    content = content.replace(/dolorData/g, 'problemaData');
    content = content.replace(/DOLOR SECTION/g, 'PROBLEMA SECTION');
    
    // Check if metadata exists
    if (!content.includes('export const metadata')) {
        const metadataBlock = `
export const metadata = {
  title: '${title}',
  description: '${desc}',
};
`;
        // Insert after imports
        const lastImportIndex = content.lastIndexOf('import ');
        const endOfLine = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLine + 1) + metadataBlock + content.slice(endOfLine + 1);
    }

    fs.writeFileSync(file, content);
}

// 1. Clean Desarrollo
deepClean(
    path.join(srcApp, 'desarrollo', 'page.tsx'),
    'Desarrollo Web de Alto Rendimiento | espín',
    'Construimos infraestructuras web inquebrantables, ultrarrápidas y optimizadas para escalar.'
);

// 2. Clean Agentes
deepClean(
    path.join(srcApp, 'agentes', 'page.tsx'),
    'Agentes y Automatización | espín',
    'Integramos asistentes de IA y automatizamos tareas mecánicas para reducir costes y multiplicar el rendimiento.'
);

// 3. Clean Page (Home)
let homeContent = fs.readFileSync(path.join(srcApp, 'page.tsx'), 'utf8');
homeContent = homeContent.replace(/dolorData/g, 'problemaData');
homeContent = homeContent.replace(/DOLOR SECTION/g, 'PROBLEMA SECTION');
fs.writeFileSync(path.join(srcApp, 'page.tsx'), homeContent);

// 4. Create missing pages
const pages = [
    { name: 'identidad', title: 'Identidad y Posicionamiento | espín' },
    { name: 'ecosistema', title: 'Ecosistema Completo | espín' }
];

for (const p of pages) {
    const dir = path.join(srcApp, p.name);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    const pFile = path.join(dir, 'page.tsx');
    if (!fs.existsSync(pFile)) {
        fs.writeFileSync(pFile, `import React from "react";
import { HeaderAndModal } from "@/components/ui/HeaderAndModal";
import { Footer } from "@/components/ui/Footer";

export const metadata = {
  title: '${p.title}',
  description: 'Página en construcción - espín.'
};

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-black font-inter selection:bg-[#F5B700] selection:text-black flex flex-col">
        <HeaderAndModal />
        <main className="flex-grow flex items-center justify-center pt-32 pb-16 px-6">
          <div className="text-center">
            <h1 className="font-michroma text-[#F5B700] text-3xl md:text-5xl uppercase tracking-widest mb-6">${p.name}</h1>
            <p className="text-zinc-400 font-mono text-sm tracking-widest uppercase">/ Despliegue en curso /</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
`);
    }
}

// 5. SEO: sitemap.ts
const sitemapFile = path.join(srcApp, 'sitemap.ts');
if (!fs.existsSync(sitemapFile)) {
    fs.writeFileSync(sitemapFile, `import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.espinlabs.com';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: \`\${baseUrl}/desarrollo\`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/agentes\`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/identidad\`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: \`\${baseUrl}/ecosistema\`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}
`);
}

// 6. SEO: robots.ts
const robotsFile = path.join(srcApp, 'robots.ts');
if (!fs.existsSync(robotsFile)) {
    fs.writeFileSync(robotsFile, `import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.espinlabs.com/sitemap.xml',
  }
}
`);
}

console.log('Mega cleanup and SEO completed.');
