/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => {
  const soldiedFrequencyCounter = mat
    .map((array) => array.filter((item) => item === 1).length)
    .reduce((acc, curr, index) => {
      acc[index] = curr;

      return acc;
    }, {});

  return Object.entries(soldiedFrequencyCounter)
    .sort((a, b) => a[1] - b[1])
    .map((i) => Number(i[0]))
    .slice(0, k);
};

const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

console.log(kWeakestRows(mat, 3));
