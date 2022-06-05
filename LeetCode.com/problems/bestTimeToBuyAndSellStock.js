/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  if (prices.length === 1) return 0;

  let middle = Math.floor(prices.length / 2);

  const former = prices.slice(0, middle);
  const latter = prices.slice(middle);

  return Math.max(
    maxProfit(former),
    maxProfit(latter),
    Math.max(...latter) - Math.min(...former)
  );
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
