/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
function buyChoco(prices, money) {
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;

  for (const price of prices) {
    if (price < min1) {
      min2 = min1;
      min1 = price;
    } else if (price < min2) {
      min2 = price;
    }
  }

  const finalPrice = min1 + min2;

  if (finalPrice > money) return money;

  return money - finalPrice;
}

console.log(buyChoco([1, 2, 2], 3)); // 0
console.log(buyChoco([3, 2, 3], 3)); // 3 => Cannot buy without getting into debt
