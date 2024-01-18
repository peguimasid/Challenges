/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const result = new Array(n).fill(0);

  result[0] = 1;

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] + (result?.[i - 2] ?? 1);
  }

  return result[n - 1];
}

console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
