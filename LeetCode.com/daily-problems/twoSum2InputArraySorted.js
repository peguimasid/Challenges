/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let pair = 0;
  let prev = Infinity;
  let i = 0;

  while (i < numbers.length) {
    if (numbers[i] !== prev) {
      pair = numbers.indexOf(target - numbers[i], i + 1);
      if (pair >= 0) return [i + 1, pair + 1];
    }

    prev = numbers[i];
    i++;
  }
};

console.log(twoSum([-3, 3, 4, 90], 0));
console.log(twoSum([-1, 0], -1));
console.log(twoSum([5, 25, 75], 100));
