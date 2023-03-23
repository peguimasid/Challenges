/**
 * @param {string} s
 * @return {string[]}
 */
const printVertically = (s) => {
  const splitted = s.split(' ');
  const biggestWordLength = Math.max(...splitted.map((s) => s.length));

  const result = new Array(biggestWordLength).fill('');

  let getIndex = 0;

  while (splitted.some((word) => word[getIndex])) {
    for (const word of splitted) {
      result[getIndex] += word[getIndex] || ' ';
    }
    getIndex++;
  }

  return result.map((s) => s.trimEnd());
};

console.log(printVertically('HOW ARE YOU'));
console.log(printVertically('TO BE OR NOT TO BE'));
console.log(printVertically('CONTEST IS COMING'));
