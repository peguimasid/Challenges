const isVowel = (char) => 'aeiuoAEIOU'.includes(char);

/**
 * @param {string} s
 * @return {boolean}
 */
function halvesAreAlike(s) {
  const middle = s.length / 2;

  let count = 0;

  for (let i = 0; i < middle; i++) {
    if (isVowel(s[i])) count++;
    if (isVowel(s[s.length - i - 1])) count--;
  }

  return count === 0;
}

console.log(halvesAreAlike('book')); // true
console.log(halvesAreAlike('textbook')); // false
