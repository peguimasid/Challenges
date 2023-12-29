/**
 * @param {number} n
 * @return {number}
 */
function totalMoney(n) {
  let result = 0;
  let currentWeek = 0;

  for (let i = 0; i < n; i++) {
    const currentDay = (i % 7) + 1;
    result += currentDay + currentWeek;
    if (currentDay === 7) currentWeek++;
  }

  return result;
}

console.log(totalMoney(4)); // 10

console.log(totalMoney(10)); // 37

console.log(totalMoney(20)); // 96
