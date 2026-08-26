const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div className="leading-\[1\.1\] md:leading-\[1\.1\] flex flex-col break-words w-full max-w-\[100vw\]">[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/section>)/;

const replacement = `<div className="leading-[1.1] md:leading-[1.1] flex flex-col break-words w-full max-w-[100vw]">
                  {[
                    { id: "01", title: "Identidad Visual y Marca", desc: "El aspecto de tu empresa es tu primera criba. Diseñamos una identidad sólida, elegante y disruptiva que blinda tu autoridad.", link: "/identidad" },
                    { id: "02", title: "Desarrollo de Alto Rendimiento", desc: "Sistemas estáticos pierden dinero a cada segundo. Desplegamos infraestructuras web y aplicaciones ultrarrápidas, escalables y diseñadas exclusivamente para liderar tu mercado.", link: "/desarrollo" },
                    { id: "03", title: "Agentes y Automatización", desc: "Tareas mecánicas devoran tu margen de beneficio. Integramos IA en tus flujos de trabajo para que tu empresa opere, soporte y venda en piloto automático 24/7.", link: "/agentes" }
                  ].map((phase, i) => (
                    <Link href={phase.link || "/"} key={phase.id} className="group/link block">
                      <PhaseRow phase={phase} isLast={i === 2} />
                    </Link>
                  ))}
`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/app/page.tsx', content);
