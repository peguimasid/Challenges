/**
 * @param {number[]} nums
 * @return {number}
 */
function specialArray(nums) {
  for (let x = 1; x <= nums.length; x++) {
    let count = 0;

    for (const num of nums) {
      if (num >= x) count++;
    }

    if (count === x) return x;
  }

  return -1;
}

console.log(specialArray([3, 5])); // 2
console.log(specialArray([0, 0])); // -1
console.log(specialArray([0, 4, 3, 0, 4])); // 3
