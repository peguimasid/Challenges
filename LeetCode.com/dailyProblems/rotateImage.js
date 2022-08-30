/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  let result = Array.from({ length: matrix.length }, () => []);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix.length - 1; j >= 0; j--) {
      result[i].push(matrix[j][i]);
    }
  }

  return result;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// console.log(
//   rotate([
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16],
//   ])
// );
