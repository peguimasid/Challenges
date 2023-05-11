/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxUncrossedLines = (nums1, nums2) => {
  const n = nums1.length;
  const m = nums2.length;

  const dp = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[n][m];
};

console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));
