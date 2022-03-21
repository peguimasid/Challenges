// prettier-ignore
const mapping = ['10','11','0110','0111','001100','001101','001110','001111','00011000','00011001'];

function code(strng) {
  // prettier-ignore
  return Array.from(strng).map(item => mapping[item]).join('');
}

function decode(str) {
  let result = '';

  while (str.length) {
    const i = mapping.findIndex((x) => str.startsWith(x));
    if (i < 0) return '';
    result += i;
    str = str.substr(mapping[i].length);
  }

  return result;
}

console.log(code('10111213'));
// '11', '10', '11', '11', '11', '0110', '11', '0111'

console.log(decode('11101111110110110111')); // 10111213
