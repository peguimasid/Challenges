const pairs = {
  '(': ')',
  '[': ']',
  '{': '}',
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s.length % 2 !== 0) return false;
  if (s[0] === ']' || s[0] === ')' || s[0] === '}') return false;
  if (
    s[s.length - 1] === '[' ||
    s[s.length - 1] === '(' ||
    s[s.length - 1] === '{'
  )
    return false;

  const stack = [];

  for (const char of s) {
    if (char === '[' || char === '(' || char === '{') {
      stack.push(char);
      continue;
    }
    if (pairs[stack.pop()] !== char) return false;
  }

  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
