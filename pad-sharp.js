const sharp = require('sharp');

async function padImage() {
  try {
    await sharp('public/og-espin-v1.png')
      .extend({
        top: Math.floor((630 - 537) / 2),
        bottom: Math.ceil((630 - 537) / 2),
        left: Math.floor((1200 - 1024) / 2),
        right: Math.ceil((1200 - 1024) / 2),
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      })
      .toFile('public/og-espin-v1-1200.png');
    console.log('Image padded successfully to 1200x630!');
  } catch (err) {
    console.error('Error padding image:', err);
  }
}

padImage();
