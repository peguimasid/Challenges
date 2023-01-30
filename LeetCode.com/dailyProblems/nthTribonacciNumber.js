/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) => {
  const nums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    nums.push(nums[i - 3] + nums[i - 2] + nums[i - 1]);
  }

  return nums[n];
};

// t0 = 0
// t1 = 1
// t2 = 1
// tn+3 = tn + t(n+1) + t(n + 2)

console.log(tribonacci(4)); // 4
console.log(tribonacci(25)); // 1389537
