/**
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary) => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (const curr of salary) {
    sum += curr;
    min = Math.min(min, curr);
    max = Math.max(max, curr);
  }

  return (sum - min - max) / (salary.length - 2);
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
