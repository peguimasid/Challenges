const sum = (arrayValues) => arrayValues.reduce((acc, curr) => acc + curr);

/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
  let result = 0;
  let childrenCandies = Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length - 1; i++) {
    if (ratings[i + 1] > ratings[i]) {
      childrenCandies[i + 1] = childrenCandies[i] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (
      ratings[i] > ratings[i + 1] &&
      childrenCandies[i] <= childrenCandies[i + 1]
    ) {
      childrenCandies[i] = childrenCandies[i + 1] + 1;
    }
    result += childrenCandies[i];
  }
  result += childrenCandies[ratings.length - 1];

  return result;
};

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
console.log(candy([1, 3, 4, 5, 2]));
