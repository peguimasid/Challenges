/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = (n) => {
  return String(n)
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)
    .reverse()
    .map((s) => s.split('').reverse().join(''))
    .join('.');
};

console.log(thousandSeparator(987)); // "987"
console.log(thousandSeparator(1234)); // "1.234"
