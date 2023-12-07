/**
 * @param {string} num
 * @return {string}
 */
function largestOddNumber(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    const toNumber = Number(num[i]);

    if (toNumber % 2 !== 0) return num.slice(0, i + 1);
  }

  return '';
}

console.log(largestOddNumber('52')); // "5"
console.log(largestOddNumber('4206')); // ""
console.log(largestOddNumber('35427')); // "35427"
