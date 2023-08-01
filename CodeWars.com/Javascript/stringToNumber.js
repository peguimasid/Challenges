/**
 * @param {string} str
 * @return {number}
 */
const stringToNumber = (str) => {
  let result = 0;
  let sign = 1;

  if (str.startsWith('-')) {
    sign = -1;
  }

  for (let i = sign === -1 ? 1 : 0; i < str.length; i++) {
    result *= 10;
    result += str[i].charCodeAt() - 48;
  }

  return result * sign;
};

console.log(stringToNumber('1234'));
console.log(stringToNumber('605'));
