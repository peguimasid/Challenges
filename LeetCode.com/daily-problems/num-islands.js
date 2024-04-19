/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  const visited = new Set();
  let result = 0;

  function markIslandLandAsVisited(i, j) {
    const key = `${i},${j}`;

    if (grid?.[i]?.[j] !== '1' || visited.has(key)) return;

    visited.add(key);

    markIslandLandAsVisited(i - 1, j);
    markIslandLandAsVisited(i + 1, j);
    markIslandLandAsVisited(i, j - 1);
    markIslandLandAsVisited(i, j + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const key = `${i},${j}`;
      if (grid[i][j] === '1' && !visited.has(key)) {
        result++;
        markIslandLandAsVisited(i, j);
      }
    }
  }

  return result;
}

const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

console.log(numIslands(grid1)); // 1

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid2)); // 3
