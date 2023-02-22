/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = (arr) => {
  const average = arr.reduce((acc, curr) => acc + curr) / 3;
  console.log(average);

  let count = 0;
  let currentSum = 0;

  for (const num of arr) {
    currentSum += num;
    if (currentSum === average) {
      count++;
      currentSum = 0;
    }
  }

  return count >= 3;
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]));
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]));
