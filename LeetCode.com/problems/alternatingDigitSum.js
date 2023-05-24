/**
 * @param {number} n
 * @return {number}
 */
const alternateDigitSum = (n) => {
  const str = String(n);

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const num = Number(str[i]);
    result += i % 2 === 0 ? num : -num;
  }

  return result;
};

console.log(alternateDigitSum(521)); // 4
console.log(alternateDigitSum(111)); // 1
console.log(alternateDigitSum(886996)); // 0
