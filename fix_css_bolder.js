const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

const blackBtnCssOld = /\.rings-btn\.black \{[\s\S]*?\.rings-btn\.black \.arr \{[\s\S]*?\}/;

const blackBtnCssNew = `.rings-btn.black {
  border-color: black;
  color: black;
  font-weight: bold; /* Hacer la fuente más gruesa para compensar el fondo claro */
  border-width: 2px; /* Marco inicial más grueso */
  padding: 17px 33px; /* Compensar 1px extra de borde (18 -> 17) */
}
.rings-btn.black i {
  border-color: black;
}
.rings-btn.black:hover {
  border-color: black;
  border-width: 4px; /* Engordar mucho más al hover */
  padding: 15px 31px; /* Compensar 3px extra de borde respecto al original (18 -> 15) */
}
.rings-btn.black .arr {
  stroke: black;
  stroke-width: 3px; /* Hacer la flecha un poco más gruesa también */
}`;

if (blackBtnCssOld.test(css)) {
  css = css.replace(blackBtnCssOld, blackBtnCssNew);
  fs.writeFileSync('src/app/globals.css', css);
  console.log('globals.css updated for bolder CTA');
} else {
  console.log('Could not find .rings-btn.black in globals.css');
}
