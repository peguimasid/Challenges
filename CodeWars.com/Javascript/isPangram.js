/**
 * @param {string} string
 * @return {string}
 */
function isPangram(string) {
  return [
    ...new Set(
      string
        .split('')
        .map((char) => char.toLowerCase())
        .filter((char) => 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) > -1)
        .sort()
    ),
  ]
    .join('')
    .startsWith('abcdefghijklmnopqrstuvwxyz');
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));
