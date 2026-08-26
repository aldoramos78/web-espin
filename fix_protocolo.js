const fs = require('fs');
const path = require('path');
const targetPath = path.join('src', 'app', 'agentes', 'page.tsx');
let code = fs.readFileSync(targetPath, 'utf8');

code = code.replace(/\{\s*id:\s*\"01\"[\s\S]*?\},/g, '{ id: \"01\", title: \"Mapeo de Ineficiencias\", desc: \"Auditamos tu día a día para detectar qué procesos manuales te están costando tiempo y dinero.\" },');
code = code.replace(/\{\s*id:\s*\"02\"[\s\S]*?\},/g, '{ id: \"02\", title: \"Entrenamiento del Sistema\", desc: \"Configuramos la Inteligencia Artificial para que hable, actúe y tome decisiones exactamente con las mismas reglas y voz de tu negocio.\" },');
code = code.replace(/\{\s*id:\s*\"03\"[\s\S]*?\},/g, '{ id: \"03\", title: \"Despliegue Silencioso\", desc: \"Integramos los automatismos en tus herramientas actuales (WhatsApp, correo, CRM) sin interrumpir la operativa diaria.\" },');
code = code.replace(/\{\s*id:\s*\"04\"[\s\S]*?\}\s*\]/g, '{ id: \"04\", title: \"Mantenimiento y Evolución\", desc: \"La IA aprende y mejora. Nosotros la supervisamos mensualmente para asegurar que su rendimiento sea siempre óptimo.\" } ]');

// Make sure the empty li items don't render (in the impact lists)
// Actually earlier I replaced `["Retención...", "", ""]` with `["Retención..."]` directly.
// Let's just double check the marquee.
code = code.replace(/MENOS TAREAS MANUALES/g, 'MENOS TAREAS MANUALES');

fs.writeFileSync(targetPath, code);
console.log('Fixed');
