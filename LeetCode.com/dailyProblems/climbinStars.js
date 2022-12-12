/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n === 1) return 1;
  let result = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result.pop();
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));
console.log(climbStairs(8));
console.log(climbStairs(9));
console.log(climbStairs(10));
