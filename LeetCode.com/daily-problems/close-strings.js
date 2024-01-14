/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const word1Frequency = new Array(26).fill(0);
  const word2Frequency = new Array(26).fill(0);

  for (const char of word1) {
    const charIndex = char.charCodeAt() - 97;
    word1Frequency[charIndex]++;
  }

  for (const char of word2) {
    const charIndex = char.charCodeAt() - 97;

    if (word1Frequency[charIndex] === 0) {
      return false;
    }

    word2Frequency[charIndex]++;
  }

  const sortedW1 = word1Frequency.sort((a, b) => a - b).join('');
  const sortedW2 = word2Frequency.sort((a, b) => a - b).join('');

  return sortedW1 === sortedW2;
}

console.log(closeStrings('cabbba', 'abbccc')); // true
console.log(closeStrings('abc', 'bca')); // true
console.log(closeStrings('a', 'aa')); // false
console.log(closeStrings('abbzzca', 'babzzcz')); // false
console.log(closeStrings('uau', 'ssx')); // false
