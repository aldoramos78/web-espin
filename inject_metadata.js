const fs = require('fs');
const path = require('path');

const pages = [
  {
    file: 'src/app/agentes/page.tsx',
    title: 'Integracin de Agentes de IA y LLMs | espn',
    description: 'Entrenamos Inteligencia Artificial para que hable, acte y tome decisiones con las reglas de tu negocio. Despliegue silencioso y automatizacin avanzada.'
  },
  {
    file: 'src/app/desarrollo/page.tsx',
    title: 'Desarrollo de Arquitecturas Headless y Web | espn',
    description: 'Desarrollamos ecosistemas web ultrarrpidos, modulares y diseados a medida. Alta costura tecnolgica para un rendimiento y escalabilidad extremos.'
  },
  {
    file: 'src/app/ecosistema/page.tsx',
    title: 'Ecosistema Digital y Automatizacin | espn',
    description: 'Auditamos y reconstruimos infraestructuras obsoletas. Transformamos tu negocio en un ecosistema digital interconectado de alto rendimiento.'
  },
  {
    file: 'src/app/identidad/page.tsx',
    title: 'Identidad Digital y Branding Premium | espn',
    description: 'Diseo de identidades brutalistas y minimalistas. Construimos marcas con presencia imponente, sin ruido visual y mxima autoridad.'
  },
  {
    file: 'src/app/manifiesto/page.tsx',
    title: 'Manifiesto y Doctrina | espn',
    description: 'Descubre nuestra doctrina basada en el brutalismo digital: disponibilidad absoluta, precisin milimtrica y escalabilidad inmediata.'
  }
];

// UTF-8 friendly encoded strings (we use standard chars in the JS string, Node's fs.writeFileSync with utf8 will handle it)
const pagesUtf8 = [
  {
    file: 'src/app/agentes/page.tsx',
    title: 'Integración de Agentes de IA y LLMs | espín',
    description: 'Entrenamos Inteligencia Artificial para que hable, actúe y tome decisiones con las reglas de tu negocio. Despliegue silencioso y automatización avanzada.'
  },
  {
    file: 'src/app/desarrollo/page.tsx',
    title: 'Desarrollo de Arquitecturas Headless y Web | espín',
    description: 'Desarrollamos ecosistemas web ultrarrápidos, modulares y diseñados a medida. Alta costura tecnológica para un rendimiento y escalabilidad extremos.'
  },
  {
    file: 'src/app/ecosistema/page.tsx',
    title: 'Ecosistema Digital y Automatización | espín',
    description: 'Auditamos y reconstruimos infraestructuras obsoletas. Transformamos tu negocio en un ecosistema digital interconectado de alto rendimiento.'
  },
  {
    file: 'src/app/identidad/page.tsx',
    title: 'Identidad Digital y Branding Premium | espín',
    description: 'Diseño de identidades brutalistas y minimalistas. Construimos marcas con presencia imponente, sin ruido visual y máxima autoridad.'
  },
  {
    file: 'src/app/manifiesto/page.tsx',
    title: 'Manifiesto y Doctrina | espín',
    description: 'Descubre nuestra doctrina basada en el brutalismo digital: disponibilidad absoluta, precisión milimétrica y escalabilidad inmediata.'
  }
];

pagesUtf8.forEach(page => {
  let fullPath = path.resolve(page.file);
  let content = fs.readFileSync(fullPath, 'utf8');

  // If already has metadata, skip
  if (content.includes('export const metadata')) {
    console.log(`Skipping ${page.file}, already has metadata.`);
    return;
  }

  // Find the last import
  const importLines = [];
  const lines = content.split('\n');
  let lastImportIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) {
      lastImportIndex = i;
    }
  }

  const metadataCode = `\nimport type { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: '${page.title}',\n  description: '${page.description}',\n};\n`;

  lines.splice(lastImportIndex + 1, 0, metadataCode);

  fs.writeFileSync(fullPath, lines.join('\n'), 'utf8');
  console.log(`Metadata injected into ${page.file}`);
});
