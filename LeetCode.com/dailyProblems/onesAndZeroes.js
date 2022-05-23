/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = (strs, m, n) => {
  strs = strs.map((item) => {
    const s = item.split('');
    return [
      s.filter((i) => i === '0').length,
      s.filter((i) => i === '1').length,
    ];
  });

  const dp = [];

  for (let i = 0; i <= m; i++) {
    dp.push([]);
    for (let j = 0; j <= n; j++) {
      dp[i].push(0);
    }
  }

  for (let i = 0; i < strs.length; i++) {
    const [zeroCount, oneCount] = strs[i];

    for (let row = m; row >= zeroCount; row--) {
      for (let column = n; column >= oneCount; column--) {
        dp[row][column] = Math.max(
          dp[row][column],
          dp[row - zeroCount][column - oneCount] + 1
        );
      }
    }
  }
  return dp[m][n];
};

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3));
console.log(findMaxForm(['10', '0', '1'], 1, 1));
