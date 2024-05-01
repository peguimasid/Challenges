/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
function reversePrefix(word, ch) {
  const index = word.indexOf(ch);

  if (index <= 0) return word;

  return word
    .substring(0, index + 1)
    .split('')
    .reverse()
    .join('')
    .concat(word.substring(index + 1));
}

console.log(reversePrefix('abcdefd', 'd')); // dcbaefd
console.log(reversePrefix('xyxzxe', 'z')); // zxyxxe
console.log(reversePrefix('abcd', 'z')); // abcd
