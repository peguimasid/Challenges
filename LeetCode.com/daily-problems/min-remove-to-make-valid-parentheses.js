/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  let count = 0;
  let temp = '';

  for (const char of s) {
    if (char === '(') count++;
    if (char === ')') count--;
    if (count < 0) {
      count++;
      continue;
    }
    temp += char;
  }

  let result = '';
  count = 0;

  for (let i = temp.length - 1; i >= 0; i--) {
    const char = temp[i];
    if (char === '(') count--;
    if (char === ')') count++;
    if (count < 0) {
      count++;
      continue;
    }
    result = char + result;
  }

  return result;
}

console.log(minRemoveToMakeValid('lee(t(c)o)de)')); // "lee(t(c)o)de"

console.log(minRemoveToMakeValid('a)b(c)d')); // "ab(c)d"

console.log(minRemoveToMakeValid('))((')); // ""
