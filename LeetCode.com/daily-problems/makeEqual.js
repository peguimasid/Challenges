/**
 * @param {string[]} words
 * @return {boolean}
 */
function makeEqual(words) {
  const frequency = words.reduce((acc, word) => {
    word.split('').forEach((char) => (acc[char] = (acc[char] || 0) + 1));
    return acc;
  }, {});

  return Object.values(frequency).every((val) => val % words.length === 0);
}

console.log(makeEqual(['abc', 'aabc', 'bc'])); // true
console.log(makeEqual(['ab', 'a'])); // false
console.log(makeEqual(['a', 'b'])); // false
console.log(makeEqual(['abbab'])); // true
