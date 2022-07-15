/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = (s) => {
  let result = 0;

  let currLen = 1;
  let prevLen = 0;

  for (let i = 1; i < s.length; i++) {
    console.log(currLen, prevLen, result);
    if (s[i - 1] === s[i]) currLen++;
    else {
      result += Math.min(currLen, prevLen);
      prevLen = currLen;
      currLen = 1;
    }
  }

  return result + Math.min(currLen, prevLen);
};

console.log(countBinarySubstrings('00110011'));
