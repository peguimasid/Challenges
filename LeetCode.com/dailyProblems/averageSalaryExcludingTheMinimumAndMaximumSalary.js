/**
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary) => {
  const min = Math.min(...salary);
  const max = Math.max(...salary);
  const sum = salary.reduce((acc, curr) => acc + curr);

  return (sum - min - max) / (salary.length - 2);
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
