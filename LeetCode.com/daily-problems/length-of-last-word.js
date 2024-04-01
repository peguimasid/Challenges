/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  return s.trim().split(' ').pop().length;
}

console.log(lengthOfLastWord('Hello World')); //  5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); //  4
console.log(lengthOfLastWord('luffy is still joyboy')); //  6
