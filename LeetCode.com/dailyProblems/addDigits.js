/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  while (num > 10) {
    num = String(num)
      .split('')
      .reduce((acc, curr) => acc + Number(curr), 0);
  }

  return num;
};

console.log(addDigits(38)); // 3 + 8 => 11 => 1 + 1 => 2
console.log(addDigits(0)); // 0
