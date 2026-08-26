const sharp = require('sharp');
const path = require('path');

async function generate() {
  try {
    const bgPath = 'C:\\Users\\aldor\\.gemini\\antigravity\\brain\\8cb7060c-34ad-43bc-9d5b-485365e984eb\\espin_brutalist_og_1786668002981.jpg';
    const logoPath = path.join(__dirname, 'logo-overlay.svg');
    const outPath = path.join(__dirname, 'public', 'og-espin-brutalist.jpg');

    // 1. Prepare the background: resize to 1200x630, slightly darken
    const bgBuffer = await sharp(bgPath)
      .resize(1200, 630, { fit: 'cover' })
      .modulate({ brightness: 0.6 }) // darken to make logo pop
      .toBuffer();

    // 2. Composite the logo in the center
    await sharp(bgBuffer)
      .composite([
        {
          input: logoPath,
          gravity: 'center'
        }
      ])
      .jpeg({ quality: 95 })
      .toFile(outPath);

    console.log('Success');
  } catch (err) {
    console.error(err);
  }
}

generate();
