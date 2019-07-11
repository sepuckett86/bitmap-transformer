const { 
  PIXEL_OFFSET, // 4 bytes
  BITS_PER_PIXEL_OFFSET,  // 2 bytes
  FILE_SIZE_OFFSET // 4 bytes
} = require('./bitmap-constants');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUInt32LE(PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUInt16LE(BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUInt32LE(FILE_SIZE_OFFSET);
  }
}

module.exports = BitmapHeader;
