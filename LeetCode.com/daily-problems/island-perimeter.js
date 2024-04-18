/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        result += 4;
        if (grid?.[i - 1]?.[j] === 1) result -= 2;
        if (grid?.[i]?.[j - 1] === 1) result -= 2;
      }
    }
  }

  return result;
}

const mat = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(islandPerimeter(mat)); // 16
// if find land, add 4, if [i - 1][j] or [i][j - 1] is land, subtract 2
