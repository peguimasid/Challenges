/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  const sorted = nums.toSorted((a, b) => a - b);

  let mustBe = 1;
  for (let i = 0; i < sorted.length; i++) {
    const num = sorted[i];
    const next = sorted[i + 1];
    if (num > 0) {
      if (num !== mustBe) {
        return mustBe;
      }
      if (next !== num) {
        mustBe++;
      }
    }
  }

  return mustBe;
}

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
console.log(firstMissingPositive([0, 2, 2, 1, 1])); // 3
