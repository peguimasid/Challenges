/**
 * @param {number} num
 * @return {string}
 */
function toHex(num) {
  const map = '0123456789abcdef';
  let result = '';

  if (num === 0) return '0';
  if (num < 0) num += Math.pow(2, 32);

  while (num > 0) {
    result = map[num % 16] + result;
    num = Math.floor(num / 16);
  }

  return result;
}

console.log(toHex(26)); // 1a
console.log(toHex(-1)); // ffffffff (0)
