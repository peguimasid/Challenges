/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
  if (num === 0) return 1;

  return num ^ ((1 << num.toString(2).length) - 1);
}

console.log(findComplement(5)); // 2
console.log(findComplement(1)); // 0
