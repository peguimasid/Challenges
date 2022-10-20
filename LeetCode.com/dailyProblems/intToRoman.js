const map = [
  { decimal: 1000, roman: 'M' },
  { decimal: 900, roman: 'CM' },
  { decimal: 500, roman: 'D' },
  { decimal: 400, roman: 'CD' },
  { decimal: 100, roman: 'C' },
  { decimal: 90, roman: 'XC' },
  { decimal: 50, roman: 'L' },
  { decimal: 40, roman: 'XL' },
  { decimal: 10, roman: 'X' },
  { decimal: 9, roman: 'IX' },
  { decimal: 5, roman: 'V' },
  { decimal: 4, roman: 'IV' },
  { decimal: 1, roman: 'I' },
];

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  let result = '';

  while (num > 0) {
    const { roman, decimal } = map.find(({ decimal, roman }) => decimal <= num);
    result += roman;
    num -= decimal;
  }

  return result;
};

console.log(intToRoman(3));
console.log(intToRoman(100));
console.log(intToRoman(90));
