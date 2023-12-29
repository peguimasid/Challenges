/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  if (word.split('').every((letter) => letter.toUpperCase() === letter))
    return true;
  if (word.split('').every((letter) => letter.toLowerCase() === letter))
    return true;
  if (
    word[0].toUpperCase() === word[0] &&
    word
      .slice(1)
      .split('')
      .every((letter) => letter.toLowerCase() === letter)
  )
    return true;

  return false;
};

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('leetcode'));
console.log(detectCapitalUse('Google'));
console.log(detectCapitalUse('FlaG'));
