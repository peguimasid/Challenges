/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = (nums, k) => {
  let result = 0;

  const map = { 0: 1 };
  let count = 0;

  for (const num of nums) {
    count = (count + num) % k;
    if (count < 0) count += k;
    if (map[count]) result += map[count];
    map[count] = map[count] ? map[count] + 1 : 1;
  }

  return result;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)); // 7
// console.log(subarraysDivByK([5], 9)); // 0
