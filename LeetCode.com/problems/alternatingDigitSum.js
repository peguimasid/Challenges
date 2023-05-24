/**
 * @param {number} n
 * @return {number}
 */
const alternateDigitSum = (n) => {
  return String(n)
    .split('')
    .map(Number)
    .reduce((acc, curr, index) => (acc += index % 2 ? -curr : curr));
};

console.log(alternateDigitSum(521)); // 4
console.log(alternateDigitSum(111)); // 1
console.log(alternateDigitSum(886996)); // 0
