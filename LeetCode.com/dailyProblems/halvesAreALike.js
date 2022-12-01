const isVowel = (letter) => 'aeiouAEIOU'.includes(letter);

/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = (s) => {
  const middle = Math.floor(s.length / 2);
  const firstHalf = s.slice(0, middle).split('').filter(isVowel);
  const secondHalf = s.slice(middle).split('').filter(isVowel);

  return firstHalf.length === secondHalf.length;
};

console.log(halvesAreAlike('book'));
console.log(halvesAreAlike('textbook'));
