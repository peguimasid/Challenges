/**
 * @param {string} s
 * @return {string}
 */
const firstNonRepeatingLetter = (s) => {
  const str = s.toLowerCase();
  return (
    s[
      str
        .split('')
        .findIndex((char) => str.indexOf(char) === str.lastIndexOf(char))
    ] || ''
  );
};

console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('moonmen')); // 'e'
console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
