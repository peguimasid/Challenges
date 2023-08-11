/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
  const dp = [1, ...new Array(amount).fill(0)];

  for (const coin of coins) {
    for (let i = coin; i < dp.length; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
};

console.log(change(5, [1, 2, 5])); // 4
