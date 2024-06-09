/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function appendCharacters(s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) j++;
    i++;
  }

  return t.length - j;
}

console.log(appendCharacters("coaching", "coding")); // 4
console.log(appendCharacters("abcde", "a")); // 0
console.log(appendCharacters("z", "abcde")); // 5
console.log(appendCharacters("a", "a")); // 0
console.log(appendCharacters("lbg", "g")); // 0
