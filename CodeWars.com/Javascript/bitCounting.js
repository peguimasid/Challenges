/**
 * @param {number} n
 * @return {number}
 */
function countBits(n) {
  return Number(
    n
      .toString(2)
      .split('')
      .reduce((acc, curr) => (curr === '1' ? ++acc : acc))
  );
}

console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
