/**
 * @param {number} n
 * @return {boolean}
 */
const numberJoy = (n) => {
  const sumOfDigits = String(n)
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0);

  return (
    sumOfDigits * Number(String(sumOfDigits).split('').reverse().join('')) === n
  );
};

console.log(numberJoy(1729));
