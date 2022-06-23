/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = (c) => {
  for (let i = 0; i * i <= c; i++) {
    const square = Math.sqrt(c - i * i);
    if (Math.round(square) === square) return true;
  }

  return false;
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(4));
console.log(judgeSquareSum(3));
