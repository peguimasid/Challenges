/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = (nums) => {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    console.log(nums);
    let curr = nums[i];
    let prev = nums[i - 1];
    if (curr < prev) {
      count++;
      if (count > 1) return false;

      const prevprev = nums[i - 2];
      !prevprev || prevprev <= curr
        ? (nums[i - 1] = nums[i])
        : (nums[i] = nums[i - 1]);
    }
  }

  return true;
};

console.log(checkPossibility([4, 2, 3]));
// console.log('\n');
// console.log(checkPossibility([4, 2, 1]));
// console.log('\n');
console.log(checkPossibility([3, 4, 2, 3]));

// for each element nums
// we remove this element and check if array becomes sorted (1, 2, 3, 4)
// if becomes sorted just without that one element, return true
// return false
