/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
  const expectedSum = nums.length * ((nums.length + 1) / 2);
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);

  const duplicateNumber = nums.find((num, i) => nums.indexOf(num) !== i);
  const missingNumber = expectedSum - (actualSum - duplicateNumber);

  return [duplicateNumber, missingNumber];
}

console.log(findErrorNums([1, 2, 3, 4, 9, 6, 7, 8, 9])); // [9, 5] => 9 appears twice and 5 is missing
console.log(findErrorNums([4, 8, 1, 5, 2, 7, 4, 6])); // [4, 3] => 4 appears twice and 3 is missing
console.log(findErrorNums([1, 2, 2, 4])); // [2, 3] => 2 appears twice and 3 is missing
console.log(findErrorNums([1, 1])); // [1, 2] => 1 appears twice and 2 is missing
console.log(findErrorNums([3, 2, 2])); // [2, 1] => 2 appears twice and 1 is missing
console.log(findErrorNums([1, 2, 3, 4, 9, 6, 7, 8, 9])); // [9, 5] => 9 appears twice and 5 is missing
