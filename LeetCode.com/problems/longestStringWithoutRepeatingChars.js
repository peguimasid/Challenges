/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let visited = '';
    let count = 0;

    for (let j = i; j < s.length; j++) {
      if (visited.includes(s[j])) break;
      visited += s[j];
      count++;
    }

    if (count > result) result = count;
  }

  return result;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
