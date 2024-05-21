/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const result = [];

  function powerSet(array, index, curr) {
    if (index === array.length) return result.push(curr);
    powerSet(array, index + 1, [...curr, array[index]]);
    powerSet(array, index + 1, curr);
  }

  powerSet(nums, 0, []);
  return result;
}

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[],[0]]
