const Jimp = require('jimp');

async function padImage() {
  try {
    const img = await Jimp.read('public/og-espin-v1.png');
    // Create a new 1200x630 image with black background (#000000)
    const background = new Jimp(1200, 630, '#000000');
    // Composite the original image in the center
    const x = Math.round((1200 - img.bitmap.width) / 2);
    const y = Math.round((630 - img.bitmap.height) / 2);
    
    background.composite(img, x, y);
    await background.writeAsync('public/og-espin-v1.png');
    console.log('Image padded successfully!');
  } catch (err) {
    console.error('Error padding image:', err);
  }
}

padImage();
