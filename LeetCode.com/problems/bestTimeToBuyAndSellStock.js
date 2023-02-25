/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let left = 0;
  let right = 1;
  let result = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      result = Math.max(result, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }

  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
