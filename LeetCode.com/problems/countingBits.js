/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  return new Array(n + 1).fill(0).map(
    (_, i) =>
      i
        .toString(2)
        .split('')
        .filter((char) => char === '1')
        .join('').length
  );
};

console.log(countBits(2));
console.log(countBits(5));
