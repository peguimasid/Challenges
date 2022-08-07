/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s) => {
  let result = 0;

  let lcount = 0;
  let rcount = 0;

  let startIndex = 0;

  for (let i = 0; i <= s.length; i++) {
    if (lcount == rcount && lcount + rcount != 0) {
      result++;
      rcount = 0;
      lcount = 0;
    }
    if (s[i] == 'R') rcount++;
    if (s[i] == 'L') lcount++;
  }

  return result;
};

console.log(balancedStringSplit('RLRRLLRLRL'));

console.log(balancedStringSplit('RLRRRLLRLL'));

console.log(balancedStringSplit('LLLLRRRR'));
