function grayscale(pixel) {
  const value = (pixel.r + pixel.g + pixel.b) / 3;
  return {
    r: value,
    g: value,
    b: value
  };
} 

module.exports = grayscale;
