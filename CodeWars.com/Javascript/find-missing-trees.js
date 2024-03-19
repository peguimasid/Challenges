/**
 * @param {number[]} trees
 * @return {number}
 */
function findTheMissingTree(trees) {
  const frequency = trees.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const biggest = Math.max(...Object.values(frequency));

  for (const key in frequency) {
    if (frequency[key] === biggest - 1) return Number(key);
  }

  return -1;
}

console.log(findTheMissingTree([1, 2, 2, 3, 3])); // 1
console.log(findTheMissingTree([11, 2, 3, 3, 3, 11, 2, 2])); // 11
