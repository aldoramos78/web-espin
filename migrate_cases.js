const fs = require('fs');
const path = require('path');

// Read files
const agentesPath = path.resolve('src/app/agentes/page.tsx');
const desarrolloPath = path.resolve('src/app/desarrollo/page.tsx');
const homePath = path.resolve('src/app/page.tsx');

let agentesContent = fs.readFileSync(agentesPath, 'utf8');
let desarrolloContent = fs.readFileSync(desarrolloPath, 'utf8');
let homeContent = fs.readFileSync(homePath, 'utf8');

// 1. Extract Casos section from agentes
// It starts with `{/* 5. CASOS / RESULTADOS SECTION */}` or `<section id="casos"`
// and ends before `</main>` or similar. Let's use regex to grab the section block.
const sectionStartIdx = agentesContent.indexOf('<section id="casos"');
const sectionEndStr = '</section>';
let sectionEndIdx = agentesContent.indexOf(sectionEndStr, sectionStartIdx) + sectionEndStr.length;

let casosSection = agentesContent.substring(sectionStartIdx, sectionEndIdx);

// Modify Casos title for Home page to say "INTERVENCIONES CONFIDENCIALES" or "LA PRUEBA DEL RENDIMIENTO"
casosSection = casosSection.replace(
  '04 / CASOS',
  'LA PRUEBA DEL RENDIMIENTO'
);

// 2. Remove from agentes
agentesContent = agentesContent.substring(0, sectionStartIdx) + agentesContent.substring(sectionEndIdx);
// Fix any dangling comments before it if we didn't catch them
agentesContent = agentesContent.replace(/\{\/\* 5\. CASOS \/ RESULTADOS SECTION \*\/\}\s*/, '');
fs.writeFileSync(agentesPath, agentesContent, 'utf8');

// 3. Remove from desarrollo
const desStartIdx = desarrolloContent.indexOf('<section id="casos"');
if (desStartIdx !== -1) {
  let desEndIdx = desarrolloContent.indexOf(sectionEndStr, desStartIdx) + sectionEndStr.length;
  desarrolloContent = desarrolloContent.substring(0, desStartIdx) + desarrolloContent.substring(desEndIdx);
  desarrolloContent = desarrolloContent.replace(/\{\/\* 5\. CASOS \/ RESULTADOS SECTION \*\/\}\s*/, '');
  fs.writeFileSync(desarrolloPath, desarrolloContent, 'utf8');
}

// 4. Inject into Home Page
// Ensure Counter is imported
if (!homeContent.includes('import { Counter }')) {
  homeContent = homeContent.replace(
    'import { ScrollReveal } from "@/components/ui/ScrollReveal";',
    'import { ScrollReveal } from "@/components/ui/ScrollReveal";\nimport { Counter } from "@/components/ui/Counter";'
  );
}

// Inject right before </main>
const injectionPoint = '</main>';
homeContent = homeContent.replace(
  injectionPoint,
  `\n          {/* 5. CASOS / RESULTADOS SECTION (Migrado para AEO) */}\n          ${casosSection}\n\n        </main>`
);

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log('Casos section migrated to Home successfully.');
