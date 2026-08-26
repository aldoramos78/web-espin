const fs = require('fs');
const path = require('path');

const pagesToFix = [
  path.join('src', 'app', 'desarrollo', 'page.tsx'),
  path.join('src', 'app', 'agentes', 'page.tsx')
];

for (const p of pagesToFix) {
  let content = fs.readFileSync(p, 'utf8');
  
  // 1. Remove the yellow subtitle
  // It looks like:
  // <div className="font-michroma text-[#F5B700] tracking-widest text-xs md:text-sm mb-4 uppercase">
  //   espín / ...
  // </div>
  const subtitleRegex = /<div className="font-michroma text-\[#F5B700\] tracking-widest text-xs md:text-sm mb-4 uppercase">\s*esp[íi]n \/ [\s\S]*?<\/div>/i;
  content = content.replace(subtitleRegex, '');

  // 2. Fix the H1 size in desarrollo
  if (p.includes('desarrollo')) {
    // The H1 in desarrollo has: text-[8.5vw] md:text-[6vw] lg:text-[4.5vw]
    // Let's replace it with the new safer sizes that fit 15 characters on mobile
    content = content.replace(/text-\[8\.5vw\] md:text-\[6vw\] lg:text-\[4\.5vw\]/g, 'text-[6.5vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw]');
    content = content.replace(/text-\[8\.5vw\] sm:text-\[7\.5vw\] md:text-\[6vw\] lg:text-\[4\.5vw\]/g, 'text-[6.5vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw]');
    
    // Check if the A MEDIDA is broken into another line or something in desarrollo. 
    // In the image it says "A MEDIDA" on the next lines. Let's see how it was written originally.
    // It's probably just 2 ScrollReveals.
  }

  // 3. Make sure espín is never uppercase in any plain text in the file.
  // We can just find 'ESPÍN' and replace with 'espín' outside of tags.
  // Actually, the user's main complaint was the subtitle having `uppercase` class making it uppercase. We deleted it.

  fs.writeFileSync(p, content);
}
console.log('Fixed subtitles and sizes');
