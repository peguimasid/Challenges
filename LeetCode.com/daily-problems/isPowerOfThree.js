/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
  for (let i = 1; i <= n; i *= 3) {
    if (i === n) return true;
  }

  return false;
};

// console.log(isPowerOfThree(3));
// console.log(isPowerOfThree(9));
// console.log(isPowerOfThree(27));
// console.log(isPowerOfThree(81));
// console.log(isPowerOfThree(243));
console.log(isPowerOfThree(729));
