/**
 * @param {string} str
 * @return {boolean}
 */
function isIsogram(str) {
  return Object.values(
    str
      .toLowerCase()
      .split('')
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {})
  ).every((i) => i === 1);
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isogram')); // true
console.log(isIsogram('aba')); // false
console.log(isIsogram('moOse')); // false
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('')); // true
