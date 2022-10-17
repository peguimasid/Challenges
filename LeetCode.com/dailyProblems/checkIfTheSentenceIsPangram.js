/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = (sentence) => {
  return [...new Set(sentence)].length === 26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
console.log(checkIfPangram('leetcode'));
