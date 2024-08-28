/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
function countSubIslands(grid1, grid2) {
  const grid2Islands = [];

  const visitedNodes = new Set();

  /**
   * @param {number} x
   * @param {number} y
   * @param {string[]} currentIsland
   * @return {string[]}
   */
  const traverseIsland = (x, y, currentIsland) => {
    const key = `${x},${y}`;
    if (visitedNodes.has(key) || grid2?.[x]?.[y] !== 1) return;
    visitedNodes.add(key);
    currentIsland.push(key);
    traverseIsland(x - 1, y, currentIsland);
    traverseIsland(x + 1, y, currentIsland);
    traverseIsland(x, y - 1, currentIsland);
    traverseIsland(x, y + 1, currentIsland);
    return currentIsland;
  };

  for (let x = 0; x < grid2.length; x++) {
    const row = grid2[x];
    for (let y = 0; y < row.length; y++) {
      const cell = row[y];
      if (cell === 1) {
        const foundIsland = traverseIsland(x, y, []);
        if (foundIsland) grid2Islands.push(foundIsland);
      }
    }
  }

  let result = 0;

  for (const island of grid2Islands) {
    const isSubIsland = island.every((key) => {
      const [x, y] = key.split(",").map(Number);
      return grid1[x][y] === 1;
    });
    if (isSubIsland) result++;
  }

  return result;
}

// prettier-ignore
const g11 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]]
// prettier-ignore
const g12 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
console.log(countSubIslands(g11, g12)); // 3

// prettier-ignore
const g21 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]]
// prettier-ignore
const g22 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
console.log(countSubIslands(g21, g22)); // 2
