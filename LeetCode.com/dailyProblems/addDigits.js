/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => ((num - 1) % 9) + 1;

console.log(addDigits(38)); // 3 + 8 => 11 => 1 + 1 => 2
console.log(addDigits(0)); // 0
