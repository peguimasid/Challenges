/**
 * @param {string} word
 * @return {string}
 */
function duplicateEncode(word) {
  const lowerWord = word.toLowerCase();
  const frequency = lowerWord.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return lowerWord
    .split('')
    .map((char) => (frequency[char] > 1 ? ')' : '('))
    .join('');
}

console.log(duplicateEncode('din')); // "((("
console.log(duplicateEncode('recede')); // "()()()"
console.log(duplicateEncode('Success')); // ")())())"
console.log(duplicateEncode('(( @')); // "))(("
