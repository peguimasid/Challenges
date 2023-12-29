/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
function reduce(nums, fn, init) {
  let result = init;

  for (const num of nums) {
    result = fn(result, num);
  }

  return result;
}

function sum1(acc, curr) {
  return acc + curr;
}

console.log(reduce([1, 2, 3, 4], sum1, 0)); // 10

function sum2(acc, curr) {
  return acc + curr * curr;
}

console.log(reduce([1, 2, 3, 4], sum2, 100)); // 130
