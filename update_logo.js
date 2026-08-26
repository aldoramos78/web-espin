const fs = require('fs');

let content = fs.readFileSync('src/components/ui/SmartHeader.tsx', 'utf8');

// The logo button has className="flex items-center text-white hover:text-zinc-300 transition-colors"
content = content.replace(
  /className="flex items-center text-white hover:text-zinc-300 transition-colors"/,
  'className="flex items-center text-white opacity-50 hover:opacity-100 transition-opacity duration-500"'
);

fs.writeFileSync('src/components/ui/SmartHeader.tsx', content);
