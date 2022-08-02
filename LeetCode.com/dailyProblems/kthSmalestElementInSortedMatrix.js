/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => {
  return matrix.flat().sort((a, b) => a - b)[k - 1];
};

let matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];

// let matrix = [[-5]];

// let matrix = [
//   [1, 2],
//   [1, 3],
// ];

console.log(kthSmallest(matrix, 8));
