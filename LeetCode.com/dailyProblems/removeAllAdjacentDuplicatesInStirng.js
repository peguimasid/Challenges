/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s) => {
  return s
    .split('')
    .reduce((acc, _c, i, array) => {
      array[i] !== acc[acc.length - 1] ? acc.push(s[i]) : acc.pop();
      return acc;
    }, [])
    .join('');
};

console.log(removeDuplicates('abbaca'));
console.log(removeDuplicates('azxxzy'));
console.log(removeDuplicates('aababaab'));
