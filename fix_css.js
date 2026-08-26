const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

const blackBtnCss = `
.rings-btn.black {
  border-color: black;
  color: black;
}
.rings-btn.black i {
  border-color: black;
}
.rings-btn.black:hover {
  border-color: black;
  border-width: 2px;
  padding: 17px 33px; /* Compensate for 1px border increase to avoid layout jump */
}
.rings-btn.black .arr {
  stroke: black;
}
`;

if (!css.includes('.rings-btn.black')) {
  css = css.replace('.rings-btn.small .arr{width:15px;height:15px}', '.rings-btn.small .arr{width:15px;height:15px}' + blackBtnCss);
  fs.writeFileSync('src/app/globals.css', css);
  console.log('globals.css updated');
} else {
  console.log('globals.css already has .rings-btn.black');
}
