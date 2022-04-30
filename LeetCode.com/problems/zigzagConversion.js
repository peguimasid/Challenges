/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s;
  let table = new Array(numRows).fill().map(() => []);

  let i = 0;
  let j = 0;
  let k = 0;
  let backing = false;

  while (k < s.length) {
    table[i].push(s[k]);

    if (backing) {
      if (i === 0) {
        backing = false;
      } else {
        i--;
        j++;
      }
    }
    if (!backing) {
      i++;
      if (i === table.length - 1) {
        backing = true;
      }
    }

    k++;
  }
  return table.flat(1).join('');
};

console.log(convert('AB', 1));

// P     I    N
// A   L S  I G
// Y A   H R
// P     I
/////////////////
// 00      03       06
// 10   12 13    15 16
// 20 21   23 24
// 30      33
