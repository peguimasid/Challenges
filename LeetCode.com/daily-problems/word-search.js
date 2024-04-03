/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const m = board.length;
  const n = board[0].length;

  function backtrack(row, col, index) {
    if (index === word.length) return true;

    const isChar = board?.[row]?.[col] === word[index];

    if (row < 0 || col < 0 || row >= m || col >= n || !isChar) return false;

    const temp = board[row][col];
    board[row][col] = null;

    const result =
      backtrack(row + 1, col, index + 1) ||
      backtrack(row - 1, col, index + 1) ||
      backtrack(row, col + 1, index + 1) ||
      backtrack(row, col - 1, index + 1);

    board[row][col] = temp;

    return result;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }

  return false;
}

// prettier-ignore
const board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word1 = 'ABCCED';

console.log(exist(board1, word1)); // true

// prettier-ignore
const board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word2 = 'SEE';

console.log(exist(board2, word2)); // true

// prettier-ignore
const board3 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word3 = 'ABCB';

console.log(exist(board3, word3)); // false
