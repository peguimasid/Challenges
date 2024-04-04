/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s) {
  let openParentheses = 0;
  let result = 0;

  for (const char of s) {
    if (char === '(') openParentheses++;
    if (char === ')') openParentheses--;
    result = Math.max(result, openParentheses);
  }

  return result;
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1')); // 3
console.log(maxDepth('(1)+((2))+(((3)))')); // 3
