/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  return String(x).split('').reverse().join('') === String(x);
};
