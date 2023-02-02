/**
 * @param {string} previousWord
 * @param {string} currentWord
 * @param {Map} orderMap
 * @return {boolean}
 */
const isTwoWordsSorted = (previousWord, currentWord, orderMap) => {
  for (let i = 0; i < Math.min(previousWord.length, currentWord.length); i++) {
    if (orderMap.get(currentWord[i]) > orderMap.get(previousWord[i]))
      return true;
    if (orderMap.get(currentWord[i]) < orderMap.get(previousWord[i]))
      return false;
  }
  return currentWord.length >= previousWord.length;
};

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
  const orderMap = new Map(order.split('').map((char, index) => [char, index]));

  for (let i = 1; i < words.length; i++) {
    if (!isTwoWordsSorted(words[i - 1], words[i], orderMap)) return false;
  }

  return true;
};

// prettier-ignore
console.log(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')); //false

console.log(isAlienSorted(['hello', 'hello'], 'abcdefghijklmnopqrstuvwxyz')); // true

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')); // true
console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')); //false
