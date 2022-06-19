/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const countOperations = (num1, num2) => {
  let result = 0;

  while (num1 !== 0 && num2 !== 0) {
    num1 >= num2 ? (num1 -= num2) : (num2 -= num1);
    result++;
  }

  return result;
};

console.log(countOperations(2, 3));
