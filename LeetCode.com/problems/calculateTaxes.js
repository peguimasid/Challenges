/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
const calculateTax = (brackets, income) => {
  let tax = [];

  for (let i = 0; i < brackets.length; i++) {
    if (i === 0) {
      const [upper, percent] = brackets[i];
      if (income > 0) tax.push([Math.min(upper, income), percent]);
      income -= upper;
    } else {
      const [upper, percent] = brackets[i];
      const [prevUpper] = brackets?.[i - 1];
      if (income > 0) tax.push([Math.min(upper - prevUpper, income), percent]);
      income -= upper - prevUpper;
    }
  }

  return tax.reduce((acc, [val, percent]) => {
    acc += val * (percent / 100);
    return acc;
  }, 0);
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
