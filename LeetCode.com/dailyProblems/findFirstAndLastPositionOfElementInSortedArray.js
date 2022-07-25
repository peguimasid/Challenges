/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let findFirst = false;
  let findLast = false;
  let i = 0;
  let j = nums.length;

  while ((i < nums.length || j >= 0) && (!findFirst || !findLast)) {
    if (nums[i] === target && !findFirst) findFirst = true;
    if (nums[j] === target && !findLast) findLast = true;

    if (!findFirst) i++;
    if (!findLast) j--;
  }

  if (!findFirst) i = -1;
  if (!findLast) i = -1;

  return [i, j];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
