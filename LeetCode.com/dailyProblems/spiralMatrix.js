/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  const result = new Array(n).fill().map(() => new Array(n).fill(''));

  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startRow <= endRow && startCol <= endRow) {
    for (let i = startCol; i <= endCol; i++) result[startRow][i] = counter++;
    startRow++;
    for (let i = startRow; i <= endRow; i++) result[i][endCol] = counter++;
    endCol--;
    for (let i = endCol; i >= startCol; i--) result[endRow][i] = counter++;
    endRow--;
    for (let i = endRow; i >= startRow; i--) result[i][startCol] = counter++;
    startCol++;
  }

  return result;
};

console.log(generateMatrix(3));
