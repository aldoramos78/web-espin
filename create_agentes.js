const fs = require('fs');
const path = require('path');

const sourceDir = path.join('src', 'app', 'desarrollo');
const targetDir = path.join('src', 'app', 'agentes');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let code = fs.readFileSync(path.join(sourceDir, 'page.tsx'), 'utf8');

// Hero
code = code.replace(/INFRAESTRUCTURA<\/ScrollReveal>/, 'AGENTES Y<br/>AUTOMATIZACIÓN</ScrollReveal>');
code = code.replace(/text-\[8\.5vw\] md:text-\[6vw\] lg:text-\[4\.5vw\] whitespace-nowrap/g, 'text-[12vw] md:text-[8vw] lg:text-[5vw] leading-none');
code = code.replace('espín / infraestructura a medida', 'espín / agentes y automatización');
code = code.replace(/<p className=\"font-inter font-light text-zinc-300 text-lg md:text-xl\">[\s\S]*?<\/p>/, '<p className=\"font-inter font-light text-zinc-300 text-lg md:text-xl\">Hacemos que tu empresa trabaje sola. Integramos asistentes virtuales y automatizamos procesos internos para que tu negocio opere, atienda y venda las 24 horas del día sin margen de error humano.</p>');
code = code.replace('Inicia la Auditoría', 'Solicitar Auditoría Operativa');
code = code.replace('Inicia la Auditora', 'Solicitar Auditoría Operativa');

// Marquee
code = code.replace(/CÓDIGO DE ALTO RENDIMIENTO/g, 'MENOS TAREAS MANUALES');
code = code.replace(/CDIGO DE ALTO RENDIMIENTO/g, 'MENOS TAREAS MANUALES');
code = code.replace(/ESCALABILIDAD SIN FRICCIÓN/g, 'CERO ERRORES');
code = code.replace(/ESCALABILIDAD SIN FRICCIN/g, 'CERO ERRORES');
code = code.replace(/CERO DEUDA TÉCNICA/g, 'ATENCIÓN 24/7');
code = code.replace(/CERO DEUDA TCNICA/g, 'ATENCIÓN 24/7');
code = code.replace(/ARQUITECTURA BLINDADA/g, 'MÁXIMA RENTABILIDAD');

// Dolores
code = code.replace(/title: \"SÍNDROME DE FRANKENSTEIN\"[\s\S]*?\},/, 'title: \"CUELLOS DE BOTELLA MANUALES\", desc: \"Tu equipo pierde decenas de horas a la semana en tareas repetitivas, mecánicas y de gestión que frenan el crecimiento real de la empresa.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\" /></svg> },');
code = code.replace(/title: \"SNDROME DE FRANKENSTEIN\"[\s\S]*?\},/, 'title: \"CUELLOS DE BOTELLA MANUALES\", desc: \"Tu equipo pierde decenas de horas a la semana en tareas repetitivas, mecánicas y de gestión que frenan el crecimiento real de la empresa.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\" /></svg> },');
code = code.replace(/title: \"CAÍDAS EN PICO DE DEMANDA\"[\s\S]*?\},/, 'title: \"FUGA DE CLIENTES\", desc: \"Si un cliente potencial pide información a las diez de la noche y nadie le responde al instante, al día siguiente habrá cerrado con tu competencia.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6\" /></svg> },');
code = code.replace(/title: \"CADAS EN PICO DE DEMANDA\"[\s\S]*?\},/, 'title: \"FUGA DE CLIENTES\", desc: \"Si un cliente potencial pide información a las diez de la noche y nadie le responde al instante, al día siguiente habrá cerrado con tu competencia.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6\" /></svg> },');
code = code.replace(/title: \"CUELLO DE BOTELLA TÉCNICO\"[\s\S]*?\},/, 'title: \"COSTES INFLADOS\", desc: \"Estás pagando sueldos elevados a personas altamente capacitadas para que hagan un trabajo de copia y pega que una máquina puede hacer en segundos.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" /></svg> },');
code = code.replace(/title: \"CUELLO DE BOTELLA TCNICO\"[\s\S]*?\},/, 'title: \"COSTES INFLADOS\", desc: \"Estás pagando sueldos elevados a personas altamente capacitadas para que hagan un trabajo de copia y pega que una máquina puede hacer en segundos.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" /></svg> },');

// Protocolo
code = code.replace(/title: \"Auditoría Forense\"[\s\S]*?\},/, 'title: \"Mapeo de Ineficiencias\", desc: \"Auditamos tu día a día para detectar qué procesos manuales te están costando tiempo y dinero.\" },');
code = code.replace(/title: \"Auditora Forense\"[\s\S]*?\},/, 'title: \"Mapeo de Ineficiencias\", desc: \"Auditamos tu día a día para detectar qué procesos manuales te están costando tiempo y dinero.\" },');
code = code.replace(/title: \"Demolición y Limpieza\"[\s\S]*?\},/, 'title: \"Entrenamiento del Sistema\", desc: \"Configuramos la Inteligencia Artificial para que hable, actúe y tome decisiones exactamente con las mismas reglas y voz de tu negocio.\" },');
code = code.replace(/title: \"Demolicin y Limpieza\"[\s\S]*?\},/, 'title: \"Entrenamiento del Sistema\", desc: \"Configuramos la Inteligencia Artificial para que hable, actúe y tome decisiones exactamente con las mismas reglas y voz de tu negocio.\" },');
code = code.replace(/title: \"Arquitectura Escalable\"[\s\S]*?\},/, 'title: \"Despliegue Silencioso\", desc: \"Integramos los automatismos en tus herramientas actuales (WhatsApp, correo, CRM) sin interrumpir la operativa diaria.\" },');
code = code.replace(/title: \"Gobernanza Digital\"[\s\S]*?\},/, 'title: \"Mantenimiento y Evolución\", desc: \"La IA aprende y mejora. Nosotros la supervisamos mensualmente para asegurar que su rendimiento sea siempre óptimo.\" },');

// Pilares
code = code.replace(/title: \"CIMIENTOS Y ESCALA\"[\s\S]*?\},/, 'title: \"DISPONIBILIDAD ABSOLUTA\", desc: \"Tu empresa nunca duerme, nunca se pone enferma y nunca coge vacaciones. Operatividad total los 365 días del año.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z\" /></svg> },');
code = code.replace(/title: \"SOCIOS, NO TÉCNICOS\"[\s\S]*?\},/, 'title: \"PRECISIÓN MILIMÉTRICA\", desc: \"Erradicamos el error humano de las tareas administrativas, la facturación y la gestión de datos.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z\" /></svg> },');
code = code.replace(/title: \"SOCIOS, NO TCNICOS\"[\s\S]*?\},/, 'title: \"PRECISIÓN MILIMÉTRICA\", desc: \"Erradicamos el error humano de las tareas administrativas, la facturación y la gestión de datos.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z\" /></svg> },');
code = code.replace(/title: \"INGENIERÍA DE NEGOCIO\"[\s\S]*?\},/, 'title: \"ESCALABILIDAD INMEDIATA\", desc: \"Si hoy recibes 10 correos y mañana recibes 10.000, el sistema los atiende todos a la vez con la misma calidad. Sin contratar a nadie más.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6\" /></svg> },');
code = code.replace(/title: \"INGENIERA DE NEGOCIO\"[\s\S]*?\},/, 'title: \"ESCALABILIDAD INMEDIATA\", desc: \"Si hoy recibes 10 correos y mañana recibes 10.000, el sistema los atiende todos a la vez con la misma calidad. Sin contratar a nadie más.\", icon: <svg className=\"w-8 h-8 md:w-12 md:h-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" strokeWidth=\"1.5\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6\" /></svg> },');

// Resultados
// Card 1
code = code.replace(/Red de Hoteles Boutique/g, 'Atención al Cliente');
code = code.replace(/Blindaje de arquitectura web[\s\S]*?reservas\./g, 'Implementación de IA conversacional para captación de clientes.');
code = code.replace(/to=\{100\}/g, 'to={100}');
code = code.replace(/Uptime Garantizado en Pico de Demanda/g, 'RESPUESTA INMEDIATA');
code = code.replace(/\{\[\"Blindaje antihackeo[\s\S]*?\]\.map/g, '{[\"Retención absoluta de leads comerciales en cualquier franja horaria.\"].map');

// Card 2
code = code.replace(/Red de Lavanderías/g, 'Operativa Interna');
code = code.replace(/Red de Lavanderas/g, 'Operativa Interna');
code = code.replace(/Sustitución de procesos manuales[\s\S]*?corporativos\./g, 'Automatización de flujos de trabajo y tareas administrativas.');
code = code.replace(/Sustitucin de procesos manuales[\s\S]*?corporativos\./g, 'Automatización de flujos de trabajo y tareas administrativas.');
code = code.replace(/to=\{-60\}/g, 'to={-80}');
code = code.replace(/Reducción de Carga Administrativa/g, 'REDUCCIÓN DE CARGA ADMINISTRATIVA');
code = code.replace(/Reduccin de Carga Administrativa/g, 'REDUCCIÓN DE CARGA ADMINISTRATIVA');
code = code.replace(/\{\[\"Automatización 24\/7[\s\S]*?\]\.map/g, '{[\"Tu equipo vuelve a centrarse en tareas que generan ingresos reales.\"].map');
code = code.replace(/\{\[\"Automatizacin 24\/7[\s\S]*?\]\.map/g, '{[\"Tu equipo vuelve a centrarse en tareas que generan ingresos reales.\"].map');

// Bottom Marquee
code = code.replace(/AUDITORÍA FORENSE/g, 'SISTEMAS AUTÓNOMOS');
code = code.replace(/AUDITORA FORENSE/g, 'SISTEMAS AUTÓNOMOS');
code = code.replace(/DEMOLICIÓN Y ARQUITECTURA/g, 'ATENCIÓN INTELIGENTE');
code = code.replace(/DEMOLICIN Y ARQUITECTURA/g, 'ATENCIÓN INTELIGENTE');
code = code.replace(/AUTOMATIZACIÓN INTELIGENTE/g, 'REDUCCIÓN DE COSTES');
code = code.replace(/AUTOMATIZACIN INTELIGENTE/g, 'REDUCCIÓN DE COSTES');
code = code.replace(/GOBERNANZA DIGITAL/g, 'MÁXIMA EFICIENCIA');

fs.writeFileSync(path.join(targetDir, 'page.tsx'), code);
console.log('Agentes page created');
