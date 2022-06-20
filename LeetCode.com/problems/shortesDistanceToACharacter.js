/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = (s, c) => {
  const indexesIncreasingOrder = s
    .split('')
    .map((_, index, originalArray) =>
      originalArray.indexOf(c, index) - index >= 0
        ? originalArray.indexOf(c, index) - index
        : Infinity
    );
  const indexesDecreasingOrder = s
    .split('')
    .reverse()
    .map((_, index, originalArray) =>
      originalArray.indexOf(c, index) - index >= 0
        ? originalArray.indexOf(c, index) - index
        : Infinity
    )
    .reverse();

  let result = [];

  for (let i = 0; i < indexesDecreasingOrder.length; i++) {
    result.push(Math.min(indexesDecreasingOrder[i], indexesIncreasingOrder[i]));
  }

  return result;
};

console.log(shortestToChar('loveleetcode', 'e'));
console.log(shortestToChar('aaba', 'b'));

// [3,2,1,0,1,0,0,1,2,2,1,0];
// [3,2,1,0,1,0,0,1,2,2,1,0]
//  l o v e l e e t c o d e
//        -   - -         -
