/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s;
  const arr = new Array(numRows).fill().map(() => []);

  let up = false;
  let currentRow = 0;

  for (const char of s) {
    arr[currentRow].push(char);
    currentRow = up ? currentRow - 1 : currentRow + 1;
    if (currentRow === 0) up = false;
    if (currentRow === arr.length - 1) up = true;
  }

  return arr.map((i) => i.join('')).join('');
};

console.log(convert('PAYPALISHIRING', 4));
// PINALSIGYAHRPI
