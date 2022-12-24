const MOD = 1e9 + 7;
/**
 * @param {number} n
 * @return {number}
 */
const numTilings = (n) => {
  if (n <= 2) return n;
  const dp = new Array(n + 1).fill().map(() => [0, 0, 0]);
  dp[0][0] = dp[1][0] = dp[1][1] = dp[1][2] = 1;
  for (let i = 2; i <= n; i++) {
    // prettier-ignore
    dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 2][1] + dp[i - 2][2]) % MOD;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
  }
  return dp[n][0];
};

console.log(numTilings(1));
console.log(numTilings(2));
console.log(numTilings(3));
console.log(numTilings(4));
console.log(numTilings(5));
