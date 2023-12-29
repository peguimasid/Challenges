/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const getAverage = (grid, x, y) => {
  const rawIndexes = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];

  const indexesToSum = rawIndexes.filter(([x, y]) => {
    if (x < 0 || y < 0) return false;
    if (x >= grid.length || y >= grid[0].length) return false;
    return true;
  });

  const sum = indexesToSum.reduce((acc, [x, y]) => {
    acc += grid[x][y];
    return acc;
  }, 0);

  return Math.floor(sum / indexesToSum.length);
};

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
function imageSmoother(img) {
  return img.map((row, x) => row.map((_cell, y) => getAverage(img, x, y)));
}

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ];

console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);
// [
//  [137, 141, 137],
//  [141, 138, 141],
//  [137, 141, 137]
// ];
