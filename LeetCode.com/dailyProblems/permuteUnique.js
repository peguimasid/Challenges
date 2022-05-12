/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
  if (!!nums.length && nums.length < 2) return [nums];

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    if (nums.indexOf(currentElement) !== i) continue;
    let remainder = [...nums.slice(0, i), ...nums.slice(i + 1)];
    for (const permutation of permuteUnique(remainder)) {
      result.push([currentElement].concat(permutation));
    }
  }

  return result;
};

console.log(permuteUnique([1, 2, 3]));
