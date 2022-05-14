let map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const nums = s.split('').map((item) => map[item]);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const next = nums[i + 1];

    if (curr < next) {
      result.push(next - curr);
      nums.splice(i + 1, 1);
    } else {
      result.push(curr);
    }
  }

  return result.reduce((acc, curr) => acc + curr);
};

// 1000, 100, 1000, 10, 100, 1, 5;

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
