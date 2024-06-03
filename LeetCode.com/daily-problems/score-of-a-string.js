/**
 * @param {string} s
 * @return {number}
 */
function scoreOfString(s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    result += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
  }

  return result;
}

console.log(scoreOfString("hello")); // 13
console.log(scoreOfString("zaz")); // 50
