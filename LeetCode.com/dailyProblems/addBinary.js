/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

console.log(addBinary('11', '1'));
// console.log(addBinary("1010", "1011"))
