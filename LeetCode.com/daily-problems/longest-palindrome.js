/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  let frequency = {};
  let oddFreqCount = 0;

  for (const char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
    oddFreqCount += frequency[char] % 2 !== 0 ? 1 : -1;
  }

  if (oddFreqCount > 1) return s.length - oddFreqCount + 1;

  return s.length;
}

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("bb")); // 2
