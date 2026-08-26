const fs = require('fs');
let code = fs.readFileSync('src/app/infraestructura/page.tsx', 'utf8');

// 1. Add Footer import
code = code.replace(
  'import { ContactTrigger } from "@/components/ui/ContactTrigger";',
  'import { ContactTrigger } from "@/components/ui/ContactTrigger";\nimport { Footer } from "@/components/ui/Footer";'
);

// 2. Remove Marquee
const marqueeRegex = /{\/\*\s*MARQUEE SEPARATOR\s*\*\/}[\s\S]*?(?={\/\*\s*2\. DOLOR SECTION\s*\*\/})/m;
code = code.replace(marqueeRegex, '');

// 3. Remove Protocol point 3
code = code.replace(
  '{ id: "03", title: "Automatización Inteligente", desc: "Integramos agentes IA para automatizar tus procesos. Tu empresa empieza a operar, responder y vender 24/7 sin depender de la intervención humana." },\n',
  ''
);

// Wait, the id 04 should now be 03
code = code.replace(
  '{ id: "04", title: "Gobernanza Digital", desc: "No entregamos software huérfano. Aplicamos un \'Seguro a Todo Riesgo Tecnológico\': mantenimiento, protección y evolución continua mensual." }',
  '{ id: "03", title: "Gobernanza Digital", desc: "No entregamos software huérfano. Aplicamos un \'Seguro a Todo Riesgo Tecnológico\': mantenimiento, protección y evolución continua mensual." }'
);

// We should also replace the title for "Gobernanza Digital" if the encoding was weird
// Let's just use regex to change id "04" to "03" inside the phases array.
code = code.replace(/id:\s*"04"/, 'id: "03"');

// Wait, the encoding for Automatización was likely broken when I printed it (it showed Automatizacin).
// I will just use regex to remove the 3rd element in the phases array.
const phasesArrayRegex = /({\s*id:\s*"03"[\s\S]*?},)\s*({\s*id:\s*"04"[\s\S]*?})/;
code = code.replace(phasesArrayRegex, '$2'); // Removes 03 and keeps 04, then we'll change 04 to 03
code = code.replace(/id:\s*"04"/, 'id: "03"');

// 4. Update H1 responsive size
// Find the H1
const h1Regex = /<h1 className="[^"]*">([\s\S]*?)<\/h1>/;
const match = code.match(h1Regex);
if (match) {
  let h1Content = match[0];
  // Replace text sizing classes in the h1 children or the h1 itself
  // Original is something like:
  // <h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[10.5vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.05] md:leading-[1.05] flex flex-col">
  h1Content = h1Content.replace(/text-\[10\.5vw\] sm:text-6xl md:text-7xl lg:text-\[6\.5rem\]/, 'text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.2vw]');
  
  // Inside the h1, there's ScrollReveal with class: "text-white text-[9vw] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
  // wait, the word is INFRAESTRUCTURA. We just want it responsive.
  h1Content = h1Content.replace(/text-\[9vw\] sm:text-6xl md:text-7xl lg:text-\[6\.5rem\]/g, 'text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.2vw]');
  
  code = code.replace(match[0], h1Content);
}

// 5. Replace footer
const footerStart = code.indexOf('{/* FOOTER */}');
if (footerStart > -1) {
  code = code.substring(0, footerStart) + '{/* FOOTER */}\n        <Footer />\n      </div>\n    </>\n  );\n}\n';
}

fs.writeFileSync('src/app/infraestructura/page.tsx', code);
console.log('infraestructura updated');
