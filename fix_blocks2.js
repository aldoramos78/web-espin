const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldArray = `[
                    { id: "01", title: "Auditora Forense", desc: "Radiografa exacta de tus cuellos de botella operativos. Detectamos dnde falla tu sistema actual y por dnde se est fugando el capital de tu empresa." },
                    { id: "02", title: "Demolicin y Arquitectura", desc: "Eliminamos los sistemas inestables que frenan tu negocio. Desplegamos tecnologa a medida, rpida y segura, diseada para que operes en automtico y sin cadas de servidor." },
                    { id: "03", title: "Automatizacin Inteligente", desc: "Integramos agentes IA para automatizar tus procesos. Tu empresa empieza a operar, responder y vender 24/7 sin depender de la intervencin humana." },
                    { id: "04", title: "Gobernanza Digital", desc: "No entregamos software hurfano. Aplicamos un 'Seguro a Todo Riesgo Tecnolgico': mantenimiento, proteccin y evolucin continua mensual." },
                  ].map((phase, i) => (
                    <PhaseRow phase={phase} key={phase.id} />
                  ))`;

// We'll just replace everything between `{[  ` and `  ))]}`
const startToken = '{[';
const endToken = '))}';
const startIndex = content.indexOf('{[\n                    { id: "01"');
if (startIndex !== -1) {
    const endIndex = content.indexOf('))}', startIndex);
    if (endIndex !== -1) {
        const replacement = `{[
                    { id: "01", title: "Identidad Visual y Marca", desc: "El aspecto de tu empresa es tu primera criba. Diseñamos una identidad monolítica, elegante y disruptiva que blinda tu autoridad.", link: "/identidad" },
                    { id: "02", title: "Desarrollo de Alto Rendimiento", desc: "Sistemas lentos pierden dinero. Desplegamos infraestructuras web y aplicaciones ultrarrápidas, escalables y diseñadas exclusivamente para liderar tu mercado.", link: "/desarrollo" },
                    { id: "03", title: "Agentes y Automatización", desc: "Tareas mecánicas devoran tu margen de beneficio. Integramos IA en tus flujos de trabajo para que tu empresa opere, soporte y venda en piloto automático 24/7.", link: "/agentes" }
                  ].map((phase, i) => (
                    <Link href={phase.link} key={phase.id} className="group/link block">
                      <PhaseRow phase={phase} isLast={i === 2} />
                    </Link>
                  ))}`;
        
        content = content.substring(0, startIndex) + replacement + content.substring(endIndex + 3);
        fs.writeFileSync('src/app/page.tsx', content);
        console.log("Successfully replaced the blocks");
    }
} else {
    console.log("Start token not found");
}
