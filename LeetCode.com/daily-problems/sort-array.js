/**
 * @param {number[]} nums
 * @return {number}
 */
const mostDigits = (nums) => {
  return nums.reduce((acc, curr) => {
    const length = String(Math.abs(curr)).length;
    return length > acc ? length : acc;
  }, 0);
};

/**
 * @param {number} num
 * @param {number} place
 * @return {number}
 */
const getDigit = (num, place) => {
  const strNum = String(Math.abs(num));
  const requested = Number(strNum[strNum.length - 1 - place]);

  return requested || 0;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function radixSort(nums) {
  const largest = mostDigits(nums);

  for (let j = 0; j < largest; j++) {
    const buckets = Array(10)
      .fill(null)
      .map(() => []);

    for (const num of nums) {
      const digit = getDigit(num, j);
      buckets[digit].push(num);
    }

    nums = buckets.flat();
  }

  return nums;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  const positives = nums.filter((n) => n >= 0);
  const negatives = nums.filter((n) => n < 0).map(Math.abs);

  const sortedPositives = radixSort(positives);
  const sortedNegatives = radixSort(negatives)
    .map((n) => -n)
    .reverse();

  return [...sortedNegatives, ...sortedPositives];
}

console.log(sortArray([5, -2, 3, -1])); // [1,2,3,5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0,0,1,1,2,5]
console.log(sortArray([-2, 3, -5])); // [0,0,1,1,2,5]
