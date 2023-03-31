/**
 * @param {string} s
 * @return {number}
 */
const maxPower = (s) => {
  return Math.max(...s.match(/(\w)\1*/g).map((s) => s.length));
};

console.log(maxPower('leetcode'));
console.log(maxPower('abbcccddddeeeeedcba'));
