/**
 * @param {number[]} arr
 * @return {boolean}
 */
const isSortedWithoutElement = (arr, i) => {
  const work = [...arr];
  work.splice(i, 1);
  const sorted = [...work].sort((a, b) => a - b);

  return JSON.stringify(work) === JSON.stringify(sorted);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (isSortedWithoutElement(nums, i)) return true;
  }

  return false;
};

console.log(checkPossibility([4, 2, 1]));

// for each element nums
// we remove this element and check if array becomes sorted (1, 2, 3, 4)
// if becomes sorted just without that one element, return true
// return false
