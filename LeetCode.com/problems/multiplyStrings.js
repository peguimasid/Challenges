/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  return BigInt(BigInt(num1) * BigInt(num2)).toString();
};

console.log(multiply('123456789', '987654321'));
