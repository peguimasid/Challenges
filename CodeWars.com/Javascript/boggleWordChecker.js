/**
 * @param {string[][]} board
 * @param {string} word
 * @return {number[][]}
 */
const findLetterPositionsInBoard = (board, letter) => {
  const result = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === letter) result.push([i, j]);
    }
  }

  return result;
};

/**
 * @param {string[][]} board
 * @param {string} word
 * @param {number[]} firstLetterCoordinatesInBoard
 * @return {string}
 */
const findWord = (board, word, firstLetterCoordinatesInBoard) => {
  const used = [];

  let result = false;

  const verify = ([x, y], index) => {
    if (result === true) return;
    if (board?.[x]?.[y] !== word[index]) return;
    const key = `${x}${y}`;
    if (used.includes(key)) return;
    used.push(key);
    if (index === word.length - 1 && board?.[x]?.[y] === word[index]) {
      result = true;
      return;
    }
    if (board?.[x - 1]?.[y - 1]) verify([x - 1, y - 1], index + 1);
    if (board?.[x - 1]?.[y]) verify([x - 1, y], index + 1);
    if (board?.[x - 1]?.[y + 1]) verify([x - 1, y + 1], index + 1);
    if (board?.[x]?.[y - 1]) verify([x, y - 1], index + 1);
    if (board?.[x]?.[y + 1]) verify([x, y + 1], index + 1);
    if (board?.[x + 1]?.[y - 1]) verify([x + 1, y - 1], index + 1);
    if (board?.[x + 1]?.[y]) verify([x + 1, y], index + 1);
    if (board?.[x + 1]?.[y + 1]) verify([x + 1, y + 1], index + 1);
  };

  verify(firstLetterCoordinatesInBoard, 0);

  return result;
};

/**
 * @param {string[][]} board
 * @param {string} word
 * @return {string}
 */
function checkWord(board, word) {
  const firstLetterBoardPositions = findLetterPositionsInBoard(board, word[0]);

  for (const letterCoordinates of firstLetterBoardPositions) {
    if (findWord(board, word, letterCoordinates)) {
      return true;
    }
  }

  return false;
}

const b = [
  ['E', 'A', 'R', 'A'],
  ['N', 'L', 'E', 'C'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R'],
];

console.log(checkWord(b, 'C')); // true
console.log(checkWord(b, 'EAR')); // true
console.log(checkWord(b, 'EARS')); // false
console.log(checkWord(b, 'BAILER')); // true
console.log(checkWord(b, 'RSCAREIOYBAILNEA')); // true => Must be able to check indefinite word lengths going in all directions
console.log(checkWord(b, 'CEREAL')); // false => Valid guesses can't overlap themselves
console.log(checkWord(b, 'ROBES')); // false => Valid guesses have to be adjacent
console.log(checkWord(b, 'BAKER')); // false => All the letters have to be in the board
console.log(checkWord(b, 'CARS')); // false => Valid guesses cannot wrap around the edges of the board
