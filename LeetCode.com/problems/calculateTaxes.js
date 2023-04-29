/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
const calculateTax = (brackets, income) => {
  return brackets.reduce(
    (acc, [amount, percent]) => {
      if (income <= 0) return acc;
      const curr = Math.min(income, amount - acc.prev);
      const tax = curr * (percent / 100);
      income -= curr;
      acc.paid += tax;
      acc.prev = amount;
      return acc;
    },
    { paid: 0, prev: 0 }
  ).paid;
};

// prettier-ignore
console.log(calculateTax([[3,50],[7,10],[12,25]], 10)) // 2.65
// prettier-ignore
console.log(calculateTax([[1,0],[4,25],[5,50]], 2)) // 0.25
// prettier-ignore
console.log(calculateTax([[2,25]], 0)) // 0
// prettier-ignore
console.log(calculateTax([[10,10]], 5)) // 0.5

//
