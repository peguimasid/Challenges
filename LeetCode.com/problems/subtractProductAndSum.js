/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  const splitted = String(n).split('');
  const product = splitted.reduce((acc, curr) => acc * Number(curr), 1);
  const sum = splitted.reduce((acc, curr) => acc + Number(curr), 0);

  return product - sum;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
