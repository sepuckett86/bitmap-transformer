const PixelReader = require('./pixel-reader');
const BitmapHeader = require('./bitmap-header');

class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }
  //
  transform(transformerFunction, callback) {
    const reader = new PixelReader({ bitsPerPixel: this.header.bitsPerPixel });
    // On emission of a color, from reader.read, transform it and 
    // write it to original buffer
    reader.on('color', ({ offset, ...color }) => {
      // Deconstruct r, g, b from transformerFunction output
      const { r, g, b } = transformerFunction({ color });
      this.buffer.writeUInt8(r, this.header.pixelOffset + offset);
      this.buffer.writeUInt8(g, this.header.pixelOffset + offset + 1);
      this.buffer.writeUInt8(b, this.header.pixelOffset + offset + 2);
    });
    reader.on('end', callback);
    // Read only part of buffer that is pixels
    reader.read(this.buffer.slice(this.header.pixelOffset));
  }
}


module.exports = BitmapTransformer;
