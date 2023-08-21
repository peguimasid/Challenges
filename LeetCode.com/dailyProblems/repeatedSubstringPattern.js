/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  let part = '';

  for (let i = 0; i < s.length - 1; i++) {
    part += s[i];
    if (s.split(part).every((string) => string.length === 0)) return true;
  }

  return false;
};

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); // true
