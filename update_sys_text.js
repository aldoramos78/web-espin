const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace 01 string
content = content.replace(
  'sysText: "sys: running / build optimized / 0ms latency / core active"',
  'sysText: "[MÓDULO 01] // ESTADO: ACTIVO // REPORTE TÉCNICO: DESARROLLO"'
);

// Replace 02 string
content = content.replace(
  'sysText: "sys: neural net active / task automated / workflow optimal"',
  'sysText: "[MÓDULO 02] // ESTADO: ACTIVO // REPORTE TÉCNICO: AGENTES"'
);

// Replace 03 string
content = content.replace(
  'sysText: "sys: visual core loaded / brand identity established"',
  'sysText: "[MÓDULO 03] // ESTADO: ACTIVO // REPORTE TÉCNICO: IDENTIDAD"'
);

fs.writeFileSync('src/app/page.tsx', content);
