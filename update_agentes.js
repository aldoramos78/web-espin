const fs = require('fs');
const path = require('path');
const targetDir = path.join('src', 'app', 'agentes');
let code = fs.readFileSync(path.join(targetDir, 'page.tsx'), 'utf8');

// Replace Dolores Array
const doloresRegex = /const doloresData = \[[\s\S]*?\];/;
const newDolores = `const doloresData = [
    { title: "CUELLOS DE BOTELLA MANUALES", desc: "Tu equipo pierde decenas de horas a la semana en tareas repetitivas, mecánicas y de gestión que frenan el crecimiento real de la empresa.", icon: <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: "FUGA DE CLIENTES", desc: "Si un cliente potencial pide información a las diez de la noche y nadie le responde al instante, al día siguiente habrá cerrado con tu competencia.", icon: <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg> },
    { title: "COSTES INFLADOS", desc: "Estás pagando sueldos elevados a personas altamente capacitadas para que hagan un trabajo de copia y pega que una máquina puede hacer en segundos.", icon: <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin=\"round\" d=\"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" /></svg> }
  ];`;
code = code.replace(doloresRegex, newDolores);

// Replace Protocolo directly where it's mapped
const oldProtocoloRegex = /\{\[\s*\{\s*id:\s*"01"[\s\S]*?\]\.map/g;
const newProtocolo = `{[
                  { id: "01", title: "Mapeo de Ineficiencias", desc: "Auditamos tu día a día para detectar qué procesos manuales te están costando tiempo y dinero." },
                  { id: "02", title: "Entrenamiento del Sistema", desc: "Configuramos la Inteligencia Artificial para que hable, actúe y tome decisiones exactamente con las mismas reglas y voz de tu negocio." },
                  { id: "03", title: "Despliegue Silencioso", desc: "Integramos los automatismos en tus herramientas actuales (WhatsApp, correo, CRM) sin interrumpir la operativa diaria." },
                  { id: "04", title: "Mantenimiento y Evolución", desc: "La IA aprende y mejora. Nosotros la supervisamos mensualmente para asegurar que su rendimiento sea siempre óptimo." }
                ].map`;
code = code.replace(oldProtocoloRegex, newProtocolo);

// Also fix the Hero title encoding or exact string
code = code.replace(/<h1 className="font-michroma uppercase text-\[12vw\] md:text-\[8vw\] lg:text-\[5vw\] leading-none tracking-tighter text-\[#F2EFE9\] mb-8">[\s\S]*?<\/h1>/, `<h1 className="font-michroma uppercase text-[12vw] md:text-[8vw] lg:text-[5vw] leading-none tracking-tighter text-[#F2EFE9] mb-8">
                    <div className="overflow-hidden">
                      <ScrollReveal variant="textReveal" delay={0.1}>
                        AGENTES Y<br/>AUTOMATIZACIÓN
                      </ScrollReveal>
                    </div>
                  </h1>`);

fs.writeFileSync(path.join(targetDir, 'page.tsx'), code);
console.log('Agentes specific parts updated');
