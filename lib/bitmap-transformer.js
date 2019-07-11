const PixelReader = require('./pixel-reader');
const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }
  //
  transform(transformerFunction, err => {
    // make a buffer of just the pixel info??
    const pixels = this.buffer[10];
    console.log(pixels);
    // new instance of PixelReader
    // const pixelReader = new PixelReader(this.buffer);
    // const color = pixelReader.read(this.buffer);
    // return color;
  }) {

  }
}


module.exports = BitmapTransformer;
