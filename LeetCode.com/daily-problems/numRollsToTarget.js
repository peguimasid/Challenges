/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
function numRollsToTarget(n, k, target) {
  const MOD = 1e9 + 7;

  const dp = new Array(n + 1)
    .fill()
    .map(() => new Array(target + 1).fill().map(() => 0));

  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= target; j++) {
      for (let l = 1; l <= k; l++) {
        if (l <= j) {
          dp[i][j] = dp[i][j] + dp[i - 1][j - l];
          dp[i][j] = dp[i][j] % MOD;
        }
      }
    }
  }

  return dp[n][target];
}

console.log(numRollsToTarget(1, 6, 3)); // 1
console.log(numRollsToTarget(2, 6, 7)); // 6
console.log(numRollsToTarget(30, 30, 500)); // 222616187

// OBS: The answer must be return in modulo 10^9 + 7
