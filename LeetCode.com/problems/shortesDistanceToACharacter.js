const findClosetDistanceCharFromIndex = (s, c, index) => {
  let i = index;
  let j = index;

  while (i >= 0 || i < s.length) {
    if (s[i] === c) return index - i;
    if (s[j] === c) return j - index;
    i--;
    j++;
  }

  return Infinity;
};

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = (s, c) => {
  return s
    .split('')
    .map((_, index) => findClosetDistanceCharFromIndex(s, c, index));
};

console.log(shortestToChar('loveleetcode', 'e'));

// [3,2,1,0,1,0,0,1,2,2,1,0];
// [3,2,1,0,1,0,0,1,2,2,1,0]
//  l o v e l e e t c o d e
//        -   - -         -
