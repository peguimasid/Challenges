/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
  const dp = new Array(text1.length).fill(null).map(() => {
    return new Array(text2.length).fill(null).map(() => 0);
  });

  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = (dp?.[i - 1]?.[j - 1] ?? 0) + 1;
      } else {
        dp[i][j] = Math.max(dp?.[i - 1]?.[j] || 0, dp?.[i]?.[j - 1] || 0);
      }
    }
  }

  return dp[text1.length - 1][text2.length - 1];
}

// if text1[i] == text2[j] -> DP[i][j] = DP[i - 1][j - 1] + 1
// else DP[i][j] = max(DP[i - 1][j], DP[i][j - 1])

console.log(longestCommonSubsequence('abcde', 'ace')); // 3

console.log(longestCommonSubsequence('abc', 'abc')); // 3

console.log(longestCommonSubsequence('abc', 'def')); // 0
