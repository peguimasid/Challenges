const parseToBinary = (number) => {
  return Number(number).toString(2);
};

function flippingBits(n) {
  const numberTo32Bit =
    '0'.repeat(32 - parseToBinary(n).length) + parseToBinary(n);

  let reverse = numberTo32Bit
    .split('')
    .reduce((acc, curr) => (acc += curr === '0' ? '1' : '0'), '');

  return parseInt(reverse, 2);
}

console.log(flippingBits(9));
