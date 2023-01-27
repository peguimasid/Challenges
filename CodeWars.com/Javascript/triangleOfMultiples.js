/**
 * @param {number} n
 * @return {number[]}
 */
function multTriangle(n) {
  let totalSum = 0;
  let totalEvenSum = 0;

  let num = 1;

  for (let i = 1; i <= n; i++) {
    let currentSum = i;
    const middle = Math.floor(num / 2);
    for (let j = 1; j <= num; j++) {
      if (currentSum % 2 === 0) totalEvenSum += currentSum;
      totalSum += currentSum;
      if (j <= middle) currentSum += i;
      if (j > middle) currentSum -= i;
    }
    num += 2;
  }

  return [totalSum, totalEvenSum, totalSum - totalEvenSum];
}

console.log(multTriangle(5)); // [255, 144, 81]
