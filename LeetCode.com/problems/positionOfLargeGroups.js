/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = (s) => {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let count = 0;
    for (let j = i; s[j] === char; j++) {
      count++;
    }
    if (count >= 3) result.push([i, i + count - 1]);
    i += count - 1;
  }

  return result;
};

console.log(largeGroupPositions('abcdddeeeeaabbbcd'));
