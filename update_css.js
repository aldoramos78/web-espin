const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Add .hero-stroke for responsive WebkitTextStroke
const heroStrokeCSS = `
/* ================= RESPONSIVE HERO STROKE ================= */
.hero-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.95);
  color: transparent;
}
@media (min-width: 768px) {
  .hero-stroke {
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.95);
  }
}
@media (min-width: 1280px) {
  .hero-stroke {
    -webkit-text-stroke: 3px rgba(255, 255, 255, 0.95);
  }
}
`;

if (!css.includes('.hero-stroke')) {
  css += heroStrokeCSS;
}

// Update .rings-btn.small for mobile
css = css.replace(
  /\.rings-btn\.small\{padding:12px 20px;font-size:\.62rem;gap:10px\}/,
  `.rings-btn.small {
  padding: 8px 16px;
  font-size: 0.5rem;
  gap: 8px;
}
@media (min-width: 768px) {
  .rings-btn.small {
    padding: 12px 20px;
    font-size: 0.62rem;
    gap: 10px;
  }
}`
);

fs.writeFileSync('src/app/globals.css', css);
console.log('globals.css updated with responsive rules');
