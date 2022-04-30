/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => s === s.split('').reverse().join('');

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const first = computePalindrome(i - 1, i, s, '');
    const second = computePalindrome(i - 1, i + 1, s, s[i]);
    const third = computePalindrome(i, i + 1, s, '');

    if (first.length > result.length) result = first;
    if (second.length > result.length) result = second;
    if (third.length > result.length) result = third;
  }

  return result;
};

const computePalindrome = (start, end, s, palindrome) => {
  while (start >= 0 && end < s.length) {
    if (s[start] === s[end]) {
      palindrome = s[start] + palindrome;
      palindrome = palindrome + s[end];
      start--;
      end++;
      continue;
    }
    break;
  }
  return palindrome;
};

console.log(longestPalindrome('babad'));
