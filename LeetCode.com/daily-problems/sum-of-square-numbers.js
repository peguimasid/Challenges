/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
  let start = 0;
  let end = Math.ceil(Math.sqrt(c));

  while (start <= end) {
    const sum = start ** 2 + end ** 2;
    if (sum === c) return true;
    if (sum > c) end--;
    if (sum < c) start++;
  }

  return false;
}

console.log(judgeSquareSum(5)); // 1^2 + 2^2 = 5 => `true`
console.log(judgeSquareSum(3)); // false
