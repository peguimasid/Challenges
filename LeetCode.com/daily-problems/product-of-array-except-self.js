/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < i; j++) {
      product *= nums[j];
    }
    for (let j = i + 1; j < nums.length; j++) {
      product *= nums[j];
    }
    result.push(product === 0 ? 0 : product);
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
