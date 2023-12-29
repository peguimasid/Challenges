/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
  let left = 0;
  let right = mat.length - 1;

  let result = 0;

  for (const row of mat) {
    if (left !== right) result += row[left];
    result += row[right];
    left++;
    right--;
  }

  return result;
};

const mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalSum(mat1)); // 25

const mat2 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
console.log(diagonalSum(mat2)); // 8
