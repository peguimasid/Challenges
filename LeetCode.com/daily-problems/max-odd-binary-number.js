/**
 * @param {string} s
 * @return {string}
 */
function maximumOddBinaryNumber(s) {
  return s
    .split('')
    .toSorted((a, b) => b - a)
    .slice(1)
    .concat('1')
    .join('');
}

console.log(maximumOddBinaryNumber('010')); // "001"
console.log(maximumOddBinaryNumber('0101')); // "1001"
