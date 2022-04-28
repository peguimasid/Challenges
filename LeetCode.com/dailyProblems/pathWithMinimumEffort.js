/**
 * @param {number[][]} heights
 * @return {number}
 */

const DIR = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const minimumEffortPath = (heights) => {
  const height = heights.length;
  const width = heights[0].length;

  let v = [];
  let min = 0;
  let max = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (heights[i][j - 1])
        max = Math.max(max, Math.abs(heights[i][j] - heights[i][j - 1]));
      if (heights[i - 1])
        max = Math.max(max, Math.abs(heights[i][j] - heights[i - 1][j]));
    }
  }

  const check = (i, j, k) => {
    if (i === height - 1 && j === width - 1) return true;

    v[i * width + j] = true;

    for (const [x, y] of DIR) {
      if (
        heights[i + x] &&
        heights[i + x][j + y] &&
        !v[(i + x) * width + j + y] &&
        Math.abs(heights[i + x][j + y] - heights[i][j]) <= k &&
        check(i + x, j + y, k)
      ) {
        return true;
      }
    }

    return false;
  };

  while (min < max - 1) {
    let mid = Math.floor((max + min) / 2);

    v = [];

    if (check(0, 0, mid)) max = mid;
    else min = mid;
  }

  return check(0, 0, min) ? min : max;
};

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ])
);
