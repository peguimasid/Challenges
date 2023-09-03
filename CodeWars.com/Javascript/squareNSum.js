/**
 * @param {number[]} numbers
 * @return {number}
 */
function squareSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr ** 2, 0);
}

console.log(squareSum([1, 2, 2])); // 9
