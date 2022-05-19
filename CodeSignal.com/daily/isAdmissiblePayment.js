/**
 * @param {number[]} prices
 * @param {string[]} notes
 * @param {number} x
 * @return {boolean}
 */
const solution = (prices, notes, x) => {
  let overpayment = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    const discount = notes[i];
    if (discount.includes('Same')) continue;
    const [discountPercent, rest] = discount.split('%');
    const [, discountType] = rest.split(' ');

    if (discountType === 'higher') {
      const originalPrice = (100 * price) / (Number(discountPercent) + 100);
      overpayment += price - originalPrice;
    }
    if (discountType === 'lower') {
      const originalPrice = price / (1 - Number(discountPercent) / 100);
      overpayment -= originalPrice - price;
    }
  }

  return overpayment <= x;
};

console.log(
  solution(
    [40, 40, 40, 40],
    [
      '10.0% higher than in-store',
      '10.0% lower than in-store',
      '10.0% higher than in-store',
      '10.0% lower than in-store',
    ],
    0
  )
);
console.log(
  solution(
    [110, 95, 70],
    [
      '10.0% higher than in-store',
      '5.0% lower than in-store',
      'Same as in-store',
    ],
    5
  )
);
