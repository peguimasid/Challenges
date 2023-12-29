/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
  const visitedNodes = new Set();

  const queue = [[0, 0, 1]];

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();
    const key = `${x}${y}`;
    if (visitedNodes.has(key)) continue;
    visitedNodes.add(key);
    if (x < 0 || x >= grid.length) continue;
    if (y < 0 || y >= grid[0].length) continue;
    if (grid[x][y] === 1) continue;
    if (x === grid.length - 1 && y === grid[0].length - 1) return distance;
    queue.push([x - 1, y, distance + 1]);
    queue.push([x + 1, y, distance + 1]);
    queue.push([x, y - 1, distance + 1]);
    queue.push([x, y + 1, distance + 1]);
    queue.push([x - 1, y - 1, distance + 1]);
    queue.push([x - 1, y + 1, distance + 1]);
    queue.push([x + 1, y - 1, distance + 1]);
    queue.push([x + 1, y + 1, distance + 1]);
  }

  return -1;
};

// if start position is not "0" return -1;
// from start position try to go to every direction ← ↑ → ↓ ↖ ↗ ↘ ↙ recursively
// if the current position is the grid[grid.length - 1][grid[0].length - 1]
//  set the result to be the minimum between the current result and the found one

const mat1 = [
  [0, 1],
  [1, 0],
];
console.log(shortestPathBinaryMatrix(mat1)); // 2

const mat2 = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(mat2)); // 4

const mat3 = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(mat3)); // -1
