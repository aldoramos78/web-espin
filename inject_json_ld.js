const fs = require('fs');
const path = require('path');

const layoutPath = path.resolve('src/app/layout.tsx');
let content = fs.readFileSync(layoutPath, 'utf8');

const jsonLdCode = `
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "espín",
  "url": "https://www.espinlabs.com",
  "description": "Consultoría tecnológica y de Inteligencia Artificial de alto rendimiento. Desarrollamos arquitecturas complejas, ecosistemas digitales, identidades de marca premium e integramos IA para escalar negocios.",
  "providesService": [
    {
      "@type": "Service",
      "name": "Desarrollo de Arquitecturas Headless (Web)"
    },
    {
      "@type": "Service",
      "name": "Integración de Agentes de IA y LLMs"
    },
    {
      "@type": "Service",
      "name": "Automatización de Procesos Complejos"
    },
    {
      "@type": "Service",
      "name": "Creación de Marca e Identidad Digital (Branding)"
    }
  ]
};

export default function RootLayout`;

content = content.replace('export default function RootLayout', jsonLdCode);

const bodyReplacement = `<body className={\`\${clashDisplay.variable} \${inter.variable} antialiased bg-black\`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}`;

content = content.replace(/<body className=\{`\$\{clashDisplay\.variable\} \$\{inter\.variable\} antialiased bg-black`\}>\s*\{children\}/, bodyReplacement);

fs.writeFileSync(layoutPath, content, 'utf8');
console.log('JSON-LD injected into layout.tsx');
