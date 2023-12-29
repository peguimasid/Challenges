/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
  const dp = [0];
  for (let i = 1; i <= n; i++) {
    dp[i] = Infinity;
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
};

console.log(numSquares(12));
console.log(numSquares(13));
