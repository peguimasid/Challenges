/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const result = [[]];

  for (const num of nums) {
    const n = result.length;
    for (let i = 0; i < n; i++) {
      result.push([...result[i], num]);
    }
  }

  return result;
}

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[],[0]]
