/**
 * @param {string} palindrome
 * @return {string}
 */
const breakPalindrome = (p) => {
  if (p.length === 1) return '';
  for (let i = 0; i < Math.floor(p.length / 2); i++)
    if (p[i] !== 'a') return p.replace(p[i], 'a');
  return p.replace(/.$/, 'b');
};

console.log(breakPalindrome('a'));
console.log(breakPalindrome('abccba'));
console.log(breakPalindrome('aaaaaa'));

// if length is 1 return empty string
// change first non 'a' to 'a'
// if string has only 'aaaa' change last to 'b'
