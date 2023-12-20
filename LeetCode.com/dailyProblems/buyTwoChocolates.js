/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
function buyChoco(prices, money) {
  prices.sort((a, b) => a - b);

  for (let i = 0; i < prices.length - 1; i++) {
    const finalPrice = prices[i] + prices[i + 1];
    if (finalPrice <= money) return money - finalPrice;
  }

  return money;
}

console.log(buyChoco([1, 2, 2], 3)); // 0
console.log(buyChoco([3, 2, 3], 3)); // 3 => Cannot buy without getting into debt
