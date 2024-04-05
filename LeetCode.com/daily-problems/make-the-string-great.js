/**
 * @param {string} s
 * @return {string}
 */
function makeGood(s) {
  const stack = [];

  for (const char of s) {
    stack.push(char);

    const last = stack?.[stack.length - 1];
    const secondToLast = stack?.[stack.length - 2];

    const diff = Math.abs(last?.charCodeAt() - secondToLast?.charCodeAt());

    if (diff === 32) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.join('');
}

// TIP: try to solve using a stack

console.log(makeGood('leEeetcode')); // "leetcode"
console.log(makeGood('abBAcC')); // ""
console.log(makeGood('s')); // "s"
console.log(makeGood('Pp')); // ""
