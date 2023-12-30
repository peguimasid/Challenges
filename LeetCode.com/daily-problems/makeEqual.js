/**
 * @param {string[]} words
 * @return {boolean}
 */
function makeEqual(words) {
  if (words.length === 1) {
    return true;
  }

  const totalCharsCount = words.reduce((acc, curr) => acc + curr.length, 0);

  if (totalCharsCount % words.length !== 0) {
    return false;
  }

  const frequency = words.reduce((acc, word) => {
    for (const char of word) {
      acc[char.charCodeAt() - 97]++;
    }
    return acc;
  }, new Array(26).fill(0));

  return frequency.every((val) => val % words.length === 0);
}

console.log(makeEqual(['abc', 'aabc', 'bc'])); // true
console.log(makeEqual(['ab', 'a'])); // false
console.log(makeEqual(['a', 'b'])); // false
console.log(makeEqual(['abbab'])); // true
