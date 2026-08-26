const fs = require('fs');
const path = require('path');
const p = path.join('src', 'components', 'ui', 'ScrollReveal.tsx');
let code = fs.readFileSync(p, 'utf8');

code = code.replace(/variant\?:\s*"fadeUp"\s*\|\s*"stagger"\s*\|\s*"textReveal"/, 'variant?: "fadeUp" | "stagger" | "textReveal" | "slideRight"');

const newVariant = `
  if (variant === "slideRight") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: easePremium, delay }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }
`;

code = code.replace(/if \(variant === "stagger"\)/, newVariant + '  if (variant === "stagger")');
fs.writeFileSync(p, code);
console.log('Updated ScrollReveal');
