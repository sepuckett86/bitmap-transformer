const EventEmitter = require('events');

class PixelReader extends EventEmitter {
  constructor(header) {
    super();
    this.header = header;
  }
  read(buffer) {

    this.emit('color', {
      offset: 0,
      r: buffer[0],
      g: buffer[1],
      b: buffer[2]
    });
    this.emit('color', {
      offset: 3,
      r: buffer[3],
      g: buffer[4],
      b: buffer[5]
    });
    this.emit('color', {
      offset: 6,
      r: buffer[6],
      g: buffer[7],
      b: buffer[8]
    });
    this.emit('end');
  }
}

module.exports = PixelReader;
