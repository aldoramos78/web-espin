const fs = require('fs');
const path = require('path');

const pagePath = path.resolve('src/app/ecosistema/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Replace strokeWidth="0.5" with strokeWidth="1.5" in the trilogia icons
// We need to be careful to only replace it for the three icons we added, 
// which are inside trilogiaData. They all have `aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"`

content = content.replace(
  /<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0\.5"/g,
  '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"'
);

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Stroke width updated successfully in ecosistema');
