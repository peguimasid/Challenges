/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let result = 0;

  let i = s.length - 1;

  while (s[i] && s[i] === ' ') i--;
  while (s[i] && s[i] !== ' ') {
    i--;
    result++;
  }

  return result;
}

console.log(lengthOfLastWord('Hello World')); //  5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); //  4
console.log(lengthOfLastWord('luffy is still joyboy')); //  6
