/**
 * @param {string} s
 * @return {number}
 */
const partitionString = (s) => {
  let result = 0;

  let curr = '';

  for (const char of s) {
    if (curr.includes(char)) {
      result++;
      curr = '';
    }
    curr += char;
  }

  return result + 1;
};

console.log(partitionString('abacaba'));
console.log(partitionString('ssssss'));
