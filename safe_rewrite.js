const fs = require('fs');
const path = require('path');

const pagePath = path.resolve('src/app/manifiesto/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Use regex to replace paragraphs regardless of UTF-8 garbling

// Subtitle
content = content.replace(/<p className="text-xl md:text-2xl font-inter font-extralight text-\[#CCCCCC\] leading-relaxed mb-12 md:mb-0">\s*Por qu.*?opera como lo hace\.\s*<\/p>/g,
  '<p className="text-xl md:text-2xl font-inter font-extralight text-[#CCCCCC] leading-relaxed mb-12 md:mb-0">\n              La doctrina operativa que separa a las infraestructuras de alto rendimiento del software mediocre.\n            </p>');

// Intro 1
content = content.replace(/<p className="text-base md:text-lg leading-relaxed mb-6 font-thin text-\[#FFFFFF\]">\s*No somos una agencia creativa.*?precisi.*?n de un bistur.*?\.\s*<\/p>/g,
  '<p className="text-base md:text-lg leading-relaxed mb-6 font-thin text-[#FFFFFF]">\n              No somos una agencia creativa ni una factoría de software al peso. Somos arquitectos de ecosistemas digitales. Auditamos infraestructuras corporativas lentas, ineficientes y desfasadas, para reconstruirlas con la precisión clínica de un bisturí.\n            </p>');

// Intro 2
content = content.replace(/<p className="text-base md:text-lg leading-relaxed font-thin text-\[#FFFFFF\]">\s*Esa obsesi.*?n por erradicar lo innecesario.*?No hay ruido\.\s*<\/p>/g,
  '<p className="text-base md:text-lg leading-relaxed font-thin text-[#FFFFFF]">\n              Esta obsesión por erradicar el código inútil y los procesos manuales en nuestros clientes es la que rige nuestra propia doctrina. No hacemos parches. No usamos plantillas. No hay ruido. Solo construimos cimientos definitivos.\n            </p>');

// Block 1 Title subtitle
content = content.replace(/\[ NUESTRO C.*?DIGO CROM.*?TICO \]/g, '[ NUESTRA DOCTRINA OPERATIVA ]');

// Block 1 P1
content = content.replace(/El 90% de nuestro entorno opera en un negro absoluto\..*?El blanco puro es la .*?nica voz permitida sobre ese vac.*?o\./g,
  'El 90% de nuestro entorno opera en un negro absoluto. Mientras la industria tecnológica utiliza colores y adornos para ocultar la falta de rendimiento y el código basura, nosotros usamos el vacío como herramienta arquitectónica. El negro aísla la información crítica. El blanco impone la jerarquía.');

// Block 1 P2
content = content.replace(/Nuestro .*?nico acento, el amarillo industrial \(#F5B700\), funciona como una luz forense: no rellena espacios, solo ilumina los datos cr.*?ticos o las acciones que generan negocio\./g,
  'Nuestro único acento, el amarillo industrial (#F5B700), funciona como un láser forense: no rellena espacios, solo ilumina los datos críticos y los cuellos de botella que te están haciendo perder dinero.');

// Block 2 Title
content = content.replace(/<span className="text-\[#F5B700\]">JUNTOS<\/span>, PERO NO REVUELTOS/g,
  '<span className="text-[#F5B700]">MÁQUINA</span> Y CRITERIO');

// Block 2 P1
content = content.replace(/El s.*?mbolo de esp.*?n -nuestra 'e' min.*?scula atravesada por una cu.*?a amarilla- no es un capricho geom.*?trico\. Genera un corte en espacio negativo que separa visualmente dos masas dentro de la misma forma\./g,
  'El símbolo de espín —nuestra minúscula atravesada por un corte incisivo— no es un capricho estético. Representa el núcleo de nuestra oferta: la intersección perfecta entre la automatización extrema y la supervisión.');

// Block 2 P2
content = content.replace(/Representa la intersecci.*?n entre los dos sistemas que operan en nuestros ecosistemas: la Inteligencia Artificial y la decisi.*?n humana\. El c.*?digo y el negocio\. La m.*?quina y el criterio\. El corte demuestra que conviven en el mismo entorno, pero delimita sus funciones\./g,
  'Es la frontera exacta entre la Inteligencia Artificial y la decisión humana. El código y el negocio. El corte demuestra que conviven en ecosistemas de alto rendimiento, delimitando sus funciones con precisión militar: la máquina ejecuta el volumen masivo, el humano dicta la estrategia.');

// Block 3 Title subtitle
content = content.replace(/\[ LA TIPOGRAF.*?A \]/g, '[ EL BRUTALISMO DIGITAL ]');

// Block 3 P1
content = content.replace(/Solo operamos con dos fuentes porque no necesitamos m.*?s para establecer jerarqu.*?a\. Utilizamos <span className="font-clash font-semibold text-\[10px\] md:text-xs text-\[#CCCCCC\]">CLASH DISPLAY<\/span> para nuestros titulares no porque sea est.*?tica, sino porque su geometr.*?a brutalista y precisa funciona como el plano t.*?cnico de un edificio\. Transmite orden de un solo vistazo\./g,
  'Nos regimos por el brutalismo digital. Utilizamos tipografías geométricas no por estética, sino porque funcionan como el plano técnico de un edificio. Transmiten autoridad y dominio absoluto de la infraestructura.');

// Block 3 P2
content = content.replace(/Para el cuerpo de texto, donde t.*? necesitas comprender lo que hacemos, liberamos la familia Inter: neutra, implacable y dise.*?ada para leerse en pantallas de alto rendimiento sin cansar el ojo humano\./g,
  'No seguimos modas visuales ni dependemos de frameworks efímeros. Inyectamos Inteligencia Artificial, Agentes y Arquitecturas Headless porque son la única vía real para escalar operaciones 24/7 sin multiplicar tus costes de plantilla.');

// Closing
content = content.replace(/Esta doctrina est.*?tica es el reflejo de nuestro c.*?digo\. Si eliminamos lo superfluo en nuestra propia casa, imagina lo que hacemos cuando entramos a auditar la tuya\. No seguimos tendencias, construimos infraestructuras que aguantan el peso de tu facturaci.*?n\./g,
  'Esta doctrina es el reflejo de nuestro código. Si somos así de implacables eliminando lo superfluo y automatizando procesos en nuestra propia casa, imagina lo que haremos cuando entremos a auditar la tuya. No hacemos parches: construimos ecosistemas diseñados para soportar y multiplicar todo el peso de tu facturación.');

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Manifiesto successfully rewritten with regexes.');
