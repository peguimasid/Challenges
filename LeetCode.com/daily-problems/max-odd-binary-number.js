/**
 * @param {string} s
 * @return {string}
 */
function maximumOddBinaryNumber(s) {
  let zeroesCount = 0;
  let onesCount = 0;

  for (const char of s) {
    if (char === '0') zeroesCount++;
    if (char === '1') onesCount++;
  }

  return '1'.repeat(onesCount - 1) + '0'.repeat(zeroesCount) + '1';
}

console.log(maximumOddBinaryNumber('010')); // "001"
console.log(maximumOddBinaryNumber('0101')); // "1001"
