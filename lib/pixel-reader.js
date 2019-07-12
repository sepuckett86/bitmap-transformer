const EventEmitter = require('events');

class PixelReader extends EventEmitter {
  constructor(header) {
    super();
    this.bitsPerPixel = header.bitsPerPixel;
    this.bytesPerPixel = this.bitsPerPixel / 8;
  }
  // Buffer passed here only contains pixel data
  read(buffer) {
    for(let offset = 0; offset < buffer.length; offset += this.bytesPerPixel) {
      this.emit('color', {
        offset,
        r: buffer[offset],
        g: buffer[offset + 1],
        b: buffer[offset + 2]
      });
    }
    
    this.emit('end');
  }
}

module.exports = PixelReader;
