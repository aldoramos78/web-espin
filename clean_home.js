const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Remove DOLOR SECTION
const dolorRegex = /\{\/\*\s*2\.\s*DOLOR SECTION\s*\*\/\}[\s\S]*?(?=\{\/\*\s*3\.\s*PROTOCOLO SECTION\s*\*\/)/;
content = content.replace(dolorRegex, '');

// 2. Remove PILARES SECTION
const pilaresRegex = /\{\/\*\s*4\.\s*PILARES SECTION\s*\*\/\}[\s\S]*?(?=\{\/\*\s*5\.\s*CASOS \/ RESULTADOS SECTION\s*\*\/)/;
content = content.replace(pilaresRegex, '');

// 3. Remove CASOS SECTION
const casosRegex = /\{\/\*\s*5\.\s*CASOS \/ RESULTADOS SECTION\s*\*\/\}[\s\S]*?(?=\{\/\*\s*3\.\s*EL HACHAZO \(DESPLIEGUE INTEGRAL\)\s*\*\/)/;
content = content.replace(casosRegex, '');

// 4. Also we need to fix the Hachazo title comment just so it's clean
content = content.replace(/\{\/\*\s*3\.\s*EL HACHAZO \(DESPLIEGUE INTEGRAL\)\s*\*\/\}/, '{/* ECOSISTEMA COMPLETO */}');

fs.writeFileSync('src/app/page.tsx', content);
console.log("Cleaned up the extra sections from the home page!");
