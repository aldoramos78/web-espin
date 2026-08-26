const fs = require('fs');
const path = require('path');

const pagePath = path.resolve('src/app/manifiesto/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// The HTML structure is pristine, I'm just replacing the text nodes to make them more aggressive.

// 1. Subtitle below H1
content = content.replace(
  'Por qu espn se ve, se lee y opera como lo hace.',
  'La doctrina operativa que separa a las infraestructuras de alto rendimiento del software mediocre.'
);

// 2. Intro paragraphs
content = content.replace(
  'No somos una agencia creativa. Somos una consultora de infraestructura tecnolgica. Nuestro trabajo consiste en auditar sistemas lentos, ineficientes y desfasados, para reconstruirlos con la precisin de un bistur.',
  'No somos una agencia creativa ni una factoría de software al peso. Somos arquitectos de ecosistemas digitales. Auditamos infraestructuras corporativas lentas, ineficientes y desfasadas, para reconstruirlas con la precisión clínica de un bisturí.'
);
content = content.replace(
  'Esa obsesin por erradicar lo innecesario en el cdigo de nuestros clientes es exactamente la misma que rige nuestra propia marca. No hay adornos. No hay colores de relleno. No hay ruido.',
  'Esta obsesión por erradicar el código inútil y los procesos manuales en nuestros clientes es la que rige nuestra propia doctrina. No hacemos parches. No usamos plantillas. No hay ruido. Solo construimos cimientos definitivos.'
);

// 3. Block 1 Title subtitle
content = content.replace(
  '[ NUESTRO CDIGO CROMTICO ]',
  '[ NUESTRA DOCTRINA OPERATIVA ]'
);
content = content.replace(
  'El 90% de nuestro entorno opera en un negro absoluto. En la mayora de las agencias, el color se utiliza para compensar la falta de contenido o para distraer. Nosotros usamos el vaco como herramienta arquitectnica. El negro no compite con la informacin, la asla. El blanco puro es la nica voz permitida sobre ese vaco.',
  'El 90% de nuestro entorno opera en un negro absoluto. Mientras la industria tecnológica utiliza colores y adornos para ocultar la falta de rendimiento y el código basura, nosotros usamos el vacío como herramienta arquitectónica. El negro aísla la información crítica. El blanco impone la jerarquía.'
);
content = content.replace(
  'Nuestro nico acento, el amarillo industrial (#F5B700), funciona como una luz forense: no rellena espacios, solo ilumina los datos crticos o las acciones que generan negocio.',
  'Nuestro único acento, el amarillo industrial (#F5B700), funciona como un láser forense: no rellena espacios, solo ilumina los datos críticos y los cuellos de botella que te están haciendo perder dinero.'
);

// 4. Block 2
content = content.replace(
  '<span className="text-[#F5B700]">JUNTOS</span>, PERO NO REVUELTOS',
  '<span className="text-[#F5B700]">MÁQUINA</span> Y CRITERIO'
);
content = content.replace(
  'El smbolo de espn -nuestra \'e\' minscula atravesada por una cua amarilla- no es un capricho geomtrico. Genera un corte en espacio negativo que separa visualmente dos masas dentro de la misma forma.',
  'El símbolo de espín —nuestra minúscula atravesada por un corte incisivo— no es un capricho estético. Representa el núcleo de nuestra oferta: la intersección perfecta entre la automatización extrema y la supervisión.'
);
content = content.replace(
  'Representa la interseccin entre los dos sistemas que operan en nuestros ecosistemas: la Inteligencia Artificial y la decisin humana. El cdigo y el negocio. La mquina y el criterio. El corte demuestra que conviven en el mismo entorno, pero delimita sus funciones.',
  'Es la frontera exacta entre la Inteligencia Artificial y la decisión humana. El código y el negocio. El corte demuestra que conviven en ecosistemas de alto rendimiento, delimitando sus funciones con precisión militar: la máquina ejecuta el volumen masivo, el humano dicta la estrategia.'
);

// 5. Block 3 Title subtitle
content = content.replace(
  '[ LA TIPOGRAFA ]',
  '[ EL BRUTALISMO DIGITAL ]'
);
content = content.replace(
  'Solo operamos con dos fuentes porque no necesitamos ms para establecer jerarqua. Utilizamos <span className="font-clash font-semibold text-[10px] md:text-xs text-[#CCCCCC]">CLASH DISPLAY</span> para nuestros titulares no porque sea esttica, sino porque su geometra brutalista y precisa funciona como el plano tcnico de un edificio. Transmite orden de un solo vistazo.',
  'Nos regimos por el brutalismo digital. Utilizamos tipografías geométricas no por estética, sino porque funcionan como el plano técnico de un edificio. Transmiten autoridad y dominio absoluto de la infraestructura.'
);
content = content.replace(
  'Para el cuerpo de texto, donde t necesitas comprender lo que hacemos, liberamos la familia Inter: neutra, implacable y diseada para leerse en pantallas de alto rendimiento sin cansar el ojo humano.',
  'No seguimos modas visuales ni dependemos de frameworks efímeros. Inyectamos Inteligencia Artificial, Agentes y Arquitecturas Headless porque son la única vía real para escalar operaciones 24/7 sin multiplicar tus costes de plantilla.'
);

// 6. Cierre
content = content.replace(
  'Esta doctrina esttica es el reflejo de nuestro cdigo. Si eliminamos lo superfluo en nuestra propia casa, imagina lo que hacemos cuando entramos a auditar la tuya. No seguimos tendencias, construimos infraestructuras que aguantan el peso de tu facturacin.',
  'Esta doctrina es el reflejo de nuestro código. Si somos así de implacables eliminando lo superfluo y automatizando procesos en nuestra propia casa, imagina lo que haremos cuando entremos a auditar la tuya. No hacemos parches: construimos ecosistemas diseñados para soportar y multiplicar todo el peso de tu facturación.'
);


fs.writeFileSync(pagePath, content, 'utf8');
console.log('Manifiesto reescrito con agresividad y brutalismo');
