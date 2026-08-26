const fs = require('fs');
let code = fs.readFileSync('src/app/agentes/page.tsx', 'utf8');

code = code.replace(
  /\{\s*\["Retenci[^"]+"\]\s*\.map/g,
  `{["Retención absoluta de leads comerciales en cualquier franja horaria.", "Aumento del 40% en cierre de reservas sin intervención humana.", "Eliminación de cuellos de botella durante picos de demanda."].map`
);

code = code.replace(
  /\{\s*\["Tu equipo vuelve a centrarse[^\]]+\]\s*\.map/g,
  `{["Tu equipo vuelve a centrarse en tareas que generan ingresos reales.", "Sincronización automática de bases de datos y facturación al instante.", "Reducción de errores mecánicos a cero en flujos logísticos recurrentes."].map`
);

fs.writeFileSync('src/app/agentes/page.tsx', code);
