/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = (n) => {
  let result = 1;
  let mod = 10 ** 9 + 7;
  let mul = 2;

  for (let i = 2; i <= n; i++) {
    if (i === mul) mul *= 2;
    result = (result * mul + i) % mod;
  }

  return result;
};

console.log(concatenatedBinary(42));
