const fs = require('fs');
const path = require('path');

const layoutPath = path.resolve('src/app/layout.tsx');
let content = fs.readFileSync(layoutPath, 'utf8');

// Find the end of the providesService array
const searchStr = `    {
      "@type": "Service",
      "name": "Creación de Marca e Identidad Digital (Branding)"
    }
  ]`;

const replacementStr = `    {
      "@type": "Service",
      "name": "Creación de Marca e Identidad Digital (Branding)"
    }
  ],
  "areaServed": "ES",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contacto@espinlabs.com",
    "contactType": "Consulting"
  },
  "sameAs": [
    "https://www.linkedin.com/company/espinlabs",
    "https://x.com/espinlabs"
  ]`;

content = content.replace(searchStr, replacementStr);

fs.writeFileSync(layoutPath, content, 'utf8');
console.log('JSON-LD updated in layout.tsx');
