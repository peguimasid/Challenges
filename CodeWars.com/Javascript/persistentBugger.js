/**
 * @param {number} num
 * @return {number}
 */
function persistence(num, count = 0) {
  if (num < 10) return count;

  const stringNum = String(num);

  let result = 1;

  for (const num of stringNum) {
    result *= Number(num);
  }

  if (result < 10) return count + 1;

  return persistence(result, count + 1);
}

console.log(persistence(39)); // 3
console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4
console.log(persistence(3608497)); // 1
