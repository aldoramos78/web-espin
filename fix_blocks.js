const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /\{\s*id:\s*"01"[\s\S]*?\}\]\.map\(\(phase, i\) => \(\s*<PhaseRow phase=\{phase\} key=\{phase\.id\} \/>\s*\)\)/;

const replacement = `[
                    { id: "01", title: "Identidad Visual y Marca", desc: "El aspecto de tu empresa es tu primera criba. Diseñamos una identidad sólida y una plataforma web ultrarrápida que blinda tu autoridad y convierte.", link: "/identidad" },
                    { id: "02", title: "Desarrollo de Alto Rendimiento", desc: "Sistemas lentos pierden dinero. Desplegamos infraestructuras web y aplicaciones ultrarrápidas, escalables y diseñadas exclusivamente para liderar tu mercado.", link: "/desarrollo" },
                    { id: "03", title: "Agentes y Automatización", desc: "Tareas mecánicas devoran tu margen de beneficio. Integramos IA en tus flujos de trabajo para que tu empresa opere, soporte y venda en piloto automático 24/7.", link: "/agentes" }
                  ].map((phase, i) => (
                    <Link href={phase.link} key={phase.id} className="group/link block">
                      <PhaseRow phase={phase} isLast={i === 2} />
                    </Link>
                  ))`;

if (content.match(regex)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync('src/app/page.tsx', content);
    console.log("Successfully replaced the blocks");
} else {
    console.log("Could not find the blocks to replace.");
}
