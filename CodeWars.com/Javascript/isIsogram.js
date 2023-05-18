/**
 * @param {string} str
 * @return {boolean}
 */
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isogram')); // true
console.log(isIsogram('aba')); // false
console.log(isIsogram('moOse')); // false
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('')); // true
