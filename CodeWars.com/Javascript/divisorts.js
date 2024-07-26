/**
 * @param {number} integer
 * @return {number[] | string}
 */
function divisors(integer) {
  const result = [];

  for (let i = 2; i <= integer / 2; i++) {
    if (integer % i === 0) result.push(i);
  }

  if (!result.length) {
    return `${integer} is prime`;
  }

  return result;
}

console.log(divisors(15)); // [3,5]
console.log(divisors(12)); // [2, 3, 4, 6]
console.log(divisors(13)); // "13 is prime"
