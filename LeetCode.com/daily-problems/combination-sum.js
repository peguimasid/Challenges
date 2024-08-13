/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start, currentTarget, currentCombination) {
    if (currentTarget === 0) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      if (candidates[i] > currentTarget) break;

      currentCombination.push(candidates[i]);

      backtrack(i + 1, currentTarget - candidates[i], currentCombination);

      currentCombination.pop();
    }
  }

  backtrack(0, target, []);

  return result;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [[1,2,2],[5]]
