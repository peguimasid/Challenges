/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s) => {
  let result = [];

  let lcount = 0;
  let rcount = 0;

  let startIndex = 0;

  for (let i = 0; i <= s.length; i++) {
    if (lcount == rcount && lcount + rcount != 0) {
      result.push(s.slice(startIndex, i));
      startIndex = i;
      rcount = 0;
      lcount = 0;
    }
    if (s[i] == 'R') rcount++;
    if (s[i] == 'L') lcount++;
  }

  return result.length;
};

console.log(balancedStringSplit('RLRRLLRLRL'));

console.log(balancedStringSplit('RLRRRLLRLL'));

console.log(balancedStringSplit('LLLLRRRR'));
