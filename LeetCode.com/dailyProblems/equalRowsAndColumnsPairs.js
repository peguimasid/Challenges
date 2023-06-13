/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = (grid) => {
  const rows = grid.map((arr) => arr.join());
  const columns = grid[0].map((col, i) => grid.map((row) => row[i]).join());

  let result = 0;
  for (const row of rows) {
    for (const col of columns) {
      if (row === col) result++;
    }
  }

  return result;
};

// prettier-ignore
console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]])) // 1
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
); // 3
