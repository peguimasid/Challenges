/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  let result = 0;
  let keys = {};

  for (const char of s) {
    keys[char] = (keys[char] || 0) + 1;
    console.log(keys);
    if (keys[char] % 2 === 0) {
      result += keys[char];
      keys[char] = 0;
    }
  }

  return result < s.length ? ++result : result;
};

console.log(longestPalindrome('abccccdd'));
