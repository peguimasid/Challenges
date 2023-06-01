/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
  const visitedNodes = new Set();

  const dfs = (x, y) => {
    if (x < 0 || x >= grid.length) return Infinity;
    if (y < 0 || y >= grid[0].length) return Infinity;
    const key = `${x}${y}`;
    if (visitedNodes.has(key)) return Infinity;
    if (grid[x][y] === 1) return Infinity;
    if (x === grid.length - 1 && y === grid[0].length - 1) return 1;

    visitedNodes.add(key);

    const r1 = dfs(x - 1, y);
    const r2 = dfs(x + 1, y);
    const r3 = dfs(x, y - 1);
    const r4 = dfs(x, y + 1);
    const r5 = dfs(x - 1, y + 1);
    const r6 = dfs(x + 1, y + 1);
    const r7 = dfs(x + 1, y - 1);
    const r8 = dfs(x - 1, y - 1);

    visitedNodes.delete(key);

    return Math.min(r1, r2, r3, r4, r5, r6, r7, r8) + 1;
  };

  const result = dfs(0, 0);

  if (result === Infinity) return -1;

  return result;
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
