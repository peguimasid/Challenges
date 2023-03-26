/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = [];

  for (const char of s) {
    const isNone = char !== '(' && char !== '[' && char !== '{';
    if (char === '(') stack.push(')');
    if (char === '[') stack.push(']');
    if (char === '{') stack.push('}');
    if (isNone && char !== stack.pop()) return false;
  }

  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
