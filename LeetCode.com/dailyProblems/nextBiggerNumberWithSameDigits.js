/**
 * @param {number} n
 * @return {number}
 */
function nextBigger(n) {
  const sortedDigits = (n) =>
    String(n)
      .split('')
      .sort((a, b) => b - a);
  const max = +sortedDigits(n).join('');
  for (let i = n + 1; i <= max; i++) {
    if (max === +sortedDigits(i).join('')) return i;
  }
  return -1;
}

console.log(nextBigger(12), 21);
console.log(nextBigger(513), 531);
console.log(nextBigger(2017), 2071);
console.log(nextBigger(414), 441);
console.log(nextBigger(144), 414);
