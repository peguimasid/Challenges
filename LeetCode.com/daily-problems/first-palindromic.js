/**
 * @param {string[]} words
 * @return {string}
 */
function firstPalindrome(words) {
  for (const word of words) {
    if (word.split('').reverse().join('') === word) return word;
  }

  return '';
}

console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])); // "ada"
console.log(firstPalindrome(['notapalindrome', 'racecar'])); // "racecar"
console.log(firstPalindrome(['def', 'ghi'])); // ""
