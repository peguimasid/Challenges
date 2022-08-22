/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = (n) => {
  let i = 1;

  while (i <= n) {
    if (i === n) return true;
    i *= 4;
  }

  return false;
};

console.log(isPowerOfFour(16));
