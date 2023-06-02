/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
const rgb = (r, g, b) => {
  if (r > 255) r = 255;
  if (r < 0) r = 0;
  if (g > 255) g = 255;
  if (g < 0) g = 0;
  if (b > 255) b = 255;
  if (b < 0) b = 0;

  const redHex = r.toString(16).toUpperCase().padStart(2, '0');
  const greenHex = g.toString(16).toUpperCase().padStart(2, '0');
  const blueHex = b.toString(16).toUpperCase().padStart(2, '0');

  return `${redHex}${greenHex}${blueHex}`;
};

console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255)); // 'FFFFFF'
console.log(rgb(173, 255, 47)); // 'ADFF2F'
