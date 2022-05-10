/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  return Math.max(
    -Math.pow(2, 31),
    Math.min(Math.pow(2, 31) - 1, parseInt(s) || 0)
  );
};

console.log(myAtoi('     -4193') + 1);
