/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  return s
    .trim()
    .split(' ')
    .map((string) => string.trim())
    .filter((string) => string)
    .reverse()
    .join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));
