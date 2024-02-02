/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
function sequentialDigits(low, high) {
  const result = [];

  for (let i = 1; i <= 9; i++) {
    let num = i;

    for (let j = i + 1; j <= 9; j++) {
      num = num * 10 + j;
      if (num >= low && num <= high) result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(sequentialDigits(100, 300)); // [123, 234]
console.log(sequentialDigits(1000, 13000)); // [1234,2345,3456,4567,5678,6789,12345]
