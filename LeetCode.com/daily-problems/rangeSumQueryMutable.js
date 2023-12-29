/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  this.nums[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    result += this.nums[i];
  }

  return result;
};

var obj = new NumArray([1, 3, 5]);
obj.update(1, 2);
var param_2 = obj.sumRange(0, 2);

console.log('sum >>', param_2);
console.log(obj);
