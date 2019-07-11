const fs = require('fs');

fs.readFile('./test/test-bitmap.bmp', (err, buffer) => {
  console.log(buffer)
  // Example Buffer
  // <Buffer 42 4d 66 75 00 00 00 00 00 00 36 00 00 00 28 
  // 00 00 00 64 00 00 00 64 00 00 00 01 00 18 00 00 00 00 
  // 00 30 75 00 00 12 0b 00 00 12 0b 00 00 00 00 00 00 ... 
  // 30004 more bytes>
});