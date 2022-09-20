/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = (nums1, nums2) => {
  let result = 0;
  let dp = Array.from({ length: nums1.length }, () =>
    Array.from({ length: nums2.length }, () => 0)
  );

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (i === 0 || j === 0) dp[i][j] = 1;
        else dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      result = Math.max(result, dp[i][j]);
    }
  }

  return result;
};

console.log(findLength([1, 2, 3, 2, 1], [6, 5, 3, 2, 1, 4, 7]));
