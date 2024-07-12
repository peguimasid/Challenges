/**
 * @param {string} first
 * @param {string} second
 * @return {string}
 */
function mergeStrings(first, second) {
  for (let i = 0; i < first.length; i++) {
    if (second.startsWith(first.substring(i))) {
      return first + second.substring(first.length - i);
    }
  }

  return first + second;
}

console.log(mergeStrings("abcde", "cdefgh")); // "abcdefgh"
console.log(mergeStrings("abaab", "aabab")); // "abaabab"
console.log(mergeStrings("abc", "def")); // "abcdef"
console.log(mergeStrings("abc", "abc")); // "abc"
