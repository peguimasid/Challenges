/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
function lastDigit(str1, str2) {
  const base = BigInt(str1) % 10n;
  const expoente = BigInt(str2) % 4n;

  const elevatedTo = expoente === 0n ? 4n : expoente;

  return Number(base ** elevatedTo % 10n);
}

console.log(lastDigit('4', '1')); // returns 4
console.log(lastDigit('4', '2')); // returns 6
console.log(lastDigit('9', '7')); // returns 9
console.log(lastDigit('10', '10000000000')); // returns 0
