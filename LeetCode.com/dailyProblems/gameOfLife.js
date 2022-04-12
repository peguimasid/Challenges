/**
 * @param {number[][]} board
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const countAliveNeighbours = (board, i, j) => {
  let result = 0;

  const upNeighbourAlive =
    board[i - 1] && board[i - 1][j] ? board[i - 1][j] : 0;
  const downNeighbourAlive =
    board[i + 1] && board[i + 1][j] ? board[i + 1][j] : 0;

  const rightNeighbourAlive = board[i] && board[i][j + 1] ? board[i][j + 1] : 0;
  const leftNeighbourAlive = board[i] && board[i][j - 1] ? board[i][j - 1] : 0;

  const upLeftNeighbourAlive =
    board[i - 1] && board[i - 1][j - 1] ? board[i - 1][j - 1] : 0;
  const upRightNeighbourAlive =
    board[i - 1] && board[i - 1][j + 1] ? board[i - 1][j + 1] : 0;

  const downLeftNeighbourAlive =
    board[i + 1] && board[i + 1][j - 1] ? board[i + 1][j - 1] : 0;
  const downRightNeighbourAlive =
    board[i + 1] && board[i + 1][j + 1] ? board[i + 1][j + 1] : 0;

  if (upNeighbourAlive) result++;
  if (upLeftNeighbourAlive) result++;
  if (upRightNeighbourAlive) result++;
  if (rightNeighbourAlive) result++;
  if (leftNeighbourAlive) result++;
  if (downNeighbourAlive) result++;
  if (downLeftNeighbourAlive) result++;
  if (downRightNeighbourAlive) result++;

  return result;
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = (board) => {
  const workBoard = JSON.parse(JSON.stringify(board));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const aliveNeighbours = countAliveNeighbours(workBoard, i, j);

      if (!workBoard[i][j] && aliveNeighbours === 3) {
        board[i][j] = 1;
      } else {
        if (aliveNeighbours < 2 || aliveNeighbours > 3) {
          board[i][j] = 0;
        }
      }
    }
  }
};
const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];

gameOfLife(board);

console.log(board);

// [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Any live cell with | fewer than two live neighbors | <dies> as if caused by under-population.
// Any live cell with | two or three live neighbors | <lives> on to the next generation.
// Any live cell with | more than three live neighbors | <dies>, as if by over-population.
// Any dead cell with | exactly three live neighbors | becomes a <live> cell, as if by reproduction.
