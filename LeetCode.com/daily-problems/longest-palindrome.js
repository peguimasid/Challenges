/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  const frequency = s.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const values = Object.values(frequency).sort((a, b) => b - a);

  let result = 0;
  let findOdd = false;

  for (const value of values) {
    const isOdd = value % 2 !== 0;
    if (isOdd && !findOdd) {
      result += value;
      findOdd = true;
    } else {
      result += isOdd ? value - 1 : value;
    }
  }

  return result;
}

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("bb")); // 2
