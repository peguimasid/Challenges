/**
 * @param {number} n
 * @return {number}
 */
const integerReplacement = (n) => {
  if (n <= 3) return n - 1;
  if (n % 2) {
    if ((n - 1) % 4) return 1 + integerReplacement(n + 1);
    return 1 + integerReplacement(n - 1);
  }
  return 1 + integerReplacement(Math.floor(n / 2));
};

console.log(integerReplacement(65535));
