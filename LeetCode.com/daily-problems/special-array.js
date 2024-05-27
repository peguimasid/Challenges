/**
 * @param {number[]} nums
 * @return {number}
 */
function specialArray(nums) {
  for (let x = 1; x <= nums.length; x++) {
    const greaterThanX = nums.reduce((count, num) => {
      if (num >= x) count++;
      return count;
    }, 0);
    if (greaterThanX === x) return x;
  }

  return -1;
}

console.log(specialArray([3, 5])); // 2
console.log(specialArray([0, 0])); // -1
console.log(specialArray([0, 4, 3, 0, 4])); // 3
