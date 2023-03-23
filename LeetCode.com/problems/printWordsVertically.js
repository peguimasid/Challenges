/**
 * @param {string} s
 * @return {string[]}
 */
const printVertically = (s) => {
  const splitted = s.split(' ');
  const maxLength = Math.max(...splitted.map((s) => s.length));

  return [...Array(maxLength)].map((_, i) =>
    splitted
      .map((word) => word[i] || ' ')
      .join('')
      .trimEnd()
  );
};

console.log(printVertically('HOW ARE YOU'));
console.log(printVertically('TO BE OR NOT TO BE'));
console.log(printVertically('CONTEST IS COMING'));
