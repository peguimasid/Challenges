/**
 * @param {string} string
 * @return {string}
 */
function isPangram(string) {
  string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((char) => string.includes(char));
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));
console.log(isPangram('Cwm fjord bank glyphs vext quiz'));
