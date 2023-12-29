/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let result = '1';
  for (let i = 1; i < n; i++) {
    const strArray = result.split('');
    result = '';
    let count = 1;
    for (let j = 0; j < strArray.length; j++) {
      if (strArray[j] !== strArray[j + 1]) {
        result += count + strArray[j];
        count = 1;
      } else {
        count++;
      }
    }
  }
  return result;
};

console.log(countAndSay(1));
console.log(countAndSay(4));
