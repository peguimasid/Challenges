/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
function sequentialDigits(low, high) {
  const string = '123456789';

  const startDigits = String(low).length;
  const endDigits = String(high).length;

  const result = [];

  for (let i = startDigits; i <= endDigits; i++) {
    for (let j = 0; j < string.length - i + 1; j++) {
      const num = Number(string.slice(j, i + j));
      if (num > high) return result;
      if (num >= low) {
        result.push(num);
      }
    }
  }

  return result;
}

console.log(sequentialDigits(100, 300)); // [123, 234]
console.log(sequentialDigits(1000, 13000)); // [1234,2345,3456,4567,5678,6789,12345]
