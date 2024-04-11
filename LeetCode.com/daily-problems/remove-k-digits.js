/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
  const N = num.length;

  if (N === k) return '0';

  const result = [];

  for (const char of num) {
    while (k > 0 && result.length > 0 && result.at(-1) > char) {
      result.pop();
      k--;
    }

    if (result.length === 0 && char === '0') continue;
    result.push(char);
  }

  while (k > 0 && result.length > 0) {
    k--;
    result.pop();
  }

  if (!result.length) return '0';

  return result.join('');
}

console.log(removeKdigits('1432219', 3)); // "1219"

console.log(removeKdigits('10200', 1)); // "200"

console.log(removeKdigits('10', 2)); // "0"
