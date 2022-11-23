/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidRows = (board) => {
  return board.every((row) => {
    const filledCells = row.filter((cell) => cell !== '.');
    return [...new Set(filledCells)].length === filledCells.length;
  });
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidCols = (board) => {
  const sudokuRows = new Array(9).fill().map(() => []);
  return board
    .reduce((acc, row) => {
      row.forEach((cell, index) => acc[index].push(cell));
      return acc;
    }, sudokuRows)
    .every((col) => {
      const filledCells = col.filter((cell) => cell !== '.');
      return [...new Set(filledCells)].length === filledCells.length;
    });
};

/**
 * @param {character[][]} board
 * @param {number} row
 * @param {number} col
 * @return {boolean}
 */
const isValidSubBox = (board, row, col) => {
  const upLeftBox = board[row - 1][col - 1];
  const upCenterBox = board[row - 1][col];
  const upRightBox = board[row - 1][col + 1];

  const middleLeftBox = board[row][col - 1];
  const middleCenterBox = board[row][col];
  const middleRightBox = board[row][col + 1];

  const bottomLeftBox = board[row + 1][col - 1];
  const bottomCenterBox = board[row + 1][col];
  const bottomRightBox = board[row + 1][col + 1];

  const subBox = [
    upLeftBox,
    upCenterBox,
    upRightBox,
    middleLeftBox,
    middleCenterBox,
    middleRightBox,
    bottomLeftBox,
    bottomCenterBox,
    bottomRightBox,
  ];

  const filled = subBox.filter((cell) => cell !== '.');

  return [...new Set(filled)].length === filled.length;

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSubBoxes = (board) => {
  const subBoxesPositions = [1, 4, 7];

  for (const row of subBoxesPositions) {
    for (const col of subBoxesPositions) {
      if (!isValidSubBox(board, row, col)) return false;
    }
  }

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  if (!isValidRows(board)) return false;
  if (!isValidCols(board)) return false;
  if (!isValidSubBoxes(board)) return false;
  return true;
};

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
