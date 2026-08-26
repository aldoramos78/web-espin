const fs = require('fs');
const path = require('path');

// 1. SmartHeader
const headerFile = path.join('src', 'components', 'ui', 'SmartHeader.tsx');
let headerCode = fs.readFileSync(headerFile, 'utf8');
headerCode = headerCode.replace(/Inicia la Auditoría/g, 'SOLICITAR AUDITORÍA');
headerCode = headerCode.replace(/Inicia la Auditora/g, 'SOLICITAR AUDITORÍA');
fs.writeFileSync(headerFile, headerCode);

// 2. page.tsx numbers transparency
const pageFile = path.join('src', 'app', 'page.tsx');
let pageCode = fs.readFileSync(pageFile, 'utf8');
pageCode = pageCode.replace(/text-zinc-800 lg:text-zinc-900\/50/g, 'text-zinc-900/40 lg:text-zinc-900/50');
fs.writeFileSync(pageFile, pageCode);

// 3. agentes impacts
const agentesFile = path.join('src', 'app', 'agentes', 'page.tsx');
let agentesCode = fs.readFileSync(agentesFile, 'utf8');
agentesCode = agentesCode.replace(
  /\{(?:\s*)\["Retencin absoluta de leads comerciales en cualquier franja horaria\."\](?:\s*)\}\.map/g,
  `{["Retención absoluta de leads comerciales en cualquier franja horaria.", "Aumento del 40% en cierre de reservas sin intervención humana.", "Eliminación de cuellos de botella durante picos de demanda."]}.map`
);

// Account for possible decoding
agentesCode = agentesCode.replace(
  /\{(?:\s*)\["Retención absoluta de leads comerciales en cualquier franja horaria\."\](?:\s*)\}\.map/g,
  `{["Retención absoluta de leads comerciales en cualquier franja horaria.", "Aumento del 40% en cierre de reservas internacionales sin intervención humana.", "Eliminación de cuellos de botella en atención al cliente durante picos de demanda."]}.map`
);

agentesCode = agentesCode.replace(
  /\{(?:\s*)\["Tu equipo vuelve a centrarse en tareas que generan ingresos reales\.", "", ""\](?:\s*)\}\.map/g,
  `{["Tu equipo vuelve a centrarse en tareas que generan ingresos reales.", "Sincronización automática de bases de datos y facturación al instante.", "Reducción de errores mecánicos a cero en flujos logísticos recurrentes."]}.map`
);
fs.writeFileSync(agentesFile, agentesCode);

console.log('Fixed header, home numbers, and impacts');
