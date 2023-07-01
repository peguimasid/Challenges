/**
 * @param {string} direction
 * @param {number} i
 * @param {number} j
 * @return {number[]}
 */
const getNextCellToVisit = (direction, i, j) => {
  if (direction === 'RIGHT') return [i, j + 1];
  if (direction === 'LEFT') return [i, j - 1];
  if (direction === 'UP') return [i - 1, j];
  if (direction === 'DOWN') return [i + 1, j];
};

/**
 * @param {string} direction
 * @return {string}
 */
const getNextDirection = (direction) => {
  if (direction === 'RIGHT') return 'DOWN';
  if (direction === 'LEFT') return 'UP';
  if (direction === 'UP') return 'RIGHT';
  if (direction === 'DOWN') return 'LEFT';
};

/**
 * @param {string} direction
 * @param {number} i
 * @return {number}
 */
const getNextIIndex = (direction, i) => {
  if (direction === 'RIGHT') return i;
  if (direction === 'LEFT') return i;
  if (direction === 'UP') return i - 1;
  if (direction === 'DOWN') return i + 1;
};

/**
 * @param {string} direction
 * @param {number}  j
 * @return {number}
 */
const getNextJIndex = (direction, j) => {
  if (direction === 'RIGHT') return j + 1;
  if (direction === 'LEFT') return j - 1;
  if (direction === 'UP') return j;
  if (direction === 'DOWN') return j;
};

/**
 * @param {number[][]} array
 * @return {number[]}
 */
const snail = (array) => {
  const result = [];
  const visited = [];

  const numOfItems = array.reduce((acc, curr) => (acc += curr.length), 0);

  let i = 0;
  let j = 0;
  let direction = 'RIGHT'; // 'LEFT' || 'UP' || 'DOWN'

  while (visited.length !== numOfItems) {
    const [nextI, nextJ] = getNextCellToVisit(direction, i, j);
    const currKey = `${i},${j}`;
    const nextKey = `${nextI},${nextJ}`;

    if (!array?.[nextI]?.[nextJ] || visited.includes(nextKey)) {
      direction = getNextDirection(direction);
    }
    visited.push(currKey);

    if (array?.[i]?.[j]) result.push(array[i][j]);
    i = getNextIIndex(direction, i);
    j = getNextJIndex(direction, j);
  }

  return result;
};

console.log(snail([[]])); //  []
console.log(snail([[1]])); //  [1]
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //  [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
); //  [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
