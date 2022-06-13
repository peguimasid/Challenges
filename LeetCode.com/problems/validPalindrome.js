/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const stringFiltered = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return stringFiltered === stringFiltered.split('').reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0P'));
