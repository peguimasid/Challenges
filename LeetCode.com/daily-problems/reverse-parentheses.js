/**
 * @param {string} s
 * @return {string}
 */
function reverseParentheses(s) {
  const stack = [""];

  for (const char of s) {
    if (char === "(") {
      stack.push("");
    } else if (char === ")") {
      const last = stack.pop();
      const secondToLast = stack.pop();
      stack.push(`${secondToLast}${last.split("").reverse().join("")}`);
    } else {
      stack[stack.length - 1] += char;
    }
  }

  return stack[0];
}

console.log(reverseParentheses("(abcd)")); // "dcba"
// dcba

console.log(reverseParentheses("(u(love)i)")); // "iloveu"
// (u(love)i) => (uoveli) => iloveu

console.log(reverseParentheses("(ed(et(oc))el)")); // "leetcode"
// (ed(et(oc))el) => (ed(etco)el) => (edocteel) => leetcode
