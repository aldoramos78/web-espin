const fs = require('fs');

// 1. Update PhaseRow component to accept isLast
let pr = fs.readFileSync('src/components/ui/PhaseRow.tsx', 'utf8');
pr = pr.replace(
  /export function PhaseRow\(\{(.*?)\}: \{(.*?)\}\) \{/,
  'export function PhaseRow({ $1, isLast }: { $2, isLast?: boolean }) {'
);
pr = pr.replace(
  /className="flex flex-col md:flex-row md:items-start gap-4 md:gap-24 py-10 md:py-20 border-t border-zinc-900 group"/,
  'className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-24 py-10 md:py-20 border-t border-zinc-900 group ${isLast ? \'border-b\' : \'\'}`}'
);
fs.writeFileSync('src/components/ui/PhaseRow.tsx', pr);

// 2. Update the pages that use PhaseRow
const pages = [
  'src/app/agentes/page.tsx',
  'src/app/desarrollo/page.tsx',
  'src/app/identidad/page.tsx'
];

pages.forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    // Replace <PhaseRow phase={phase} key={phase.id} /> with <PhaseRow phase={phase} key={phase.id} isLast={i === 2} />
    // Note: the array always has 3 elements, so i === 2 is correct.
    content = content.replace(
      /<PhaseRow phase=\{phase\} key=\{phase\.id\} \/>/g,
      '<PhaseRow phase={phase} key={phase.id} isLast={i === 2} />'
    );
    // Also we might need to change the section padding from md:pb-32 to md:pb-16 because now the border will make the gap very obvious
    // Wait, let's keep it first, or reduce it to md:pb-24
    fs.writeFileSync(p, content);
  }
});

console.log('PhaseRow updated');
