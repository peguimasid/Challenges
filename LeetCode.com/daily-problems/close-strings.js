/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const word1Chars = [...new Set(word1)];
  const word2Chars = [...new Set(word2)];

  if (word1Chars.sort().join('') !== word2Chars.sort().join('')) {
    return false;
  }

  const word1Frequency = new Array(26).fill(0);
  const word2Frequency = new Array(26).fill(0);

  for (const char of word1) {
    word1Frequency[char.charCodeAt() - 97]++;
  }

  for (const char of word2) {
    word2Frequency[char.charCodeAt() - 97]++;
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
