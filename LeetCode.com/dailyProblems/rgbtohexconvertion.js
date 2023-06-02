/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
const rgb = (r, g, b) => {
  return [r, g, b]
    .map((color) => {
      return Math.max(0, Math.min(255, color))
        .toString(16)
        .toUpperCase()
        .padStart(2, '0');
    })
    .join('');
};

console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255)); // 'FFFFFF'
console.log(rgb(173, 255, 47)); // 'ADFF2F'
