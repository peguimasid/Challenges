/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let i = 0;
  let j = 1;

  while (i < numbers.length && numbers[i] <= target) {
    j = i + 1;
    while (numbers[i] + numbers[j] <= target) {
      if (numbers[i] + numbers[j] === target) return [++i, ++j];
      j++;
    }
    i++;
  }
};

console.log(twoSum([-3, 3, 4, 90], 0));
console.log(twoSum([-1, 0], -1));
