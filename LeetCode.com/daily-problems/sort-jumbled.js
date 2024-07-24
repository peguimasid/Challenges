/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
function sortJumbled(mapping, nums) {
  const map = {};

  for (const num of nums) {
    map[num] = +String(num)
      .split("")
      .map((v) => mapping[v])
      .join("");
  }

  return nums.toSorted((a, b) => map[a] - map[b]);
}

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38])); // [338,38,991]
console.log(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123])); // [123,456,789]
