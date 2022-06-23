/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = (c) => {
  for (let i = 0; i < Math.ceil(c / 2) + 1; i++) {
    for (let j = 0; j < Math.ceil(c / 2) + 1; j++) {
      // console.log(i ** 2, i ** 2);
      if (i ** 2 + j ** 2 === c) return true;
    }
  }

  return false;
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(4));
console.log(judgeSquareSum(3));
