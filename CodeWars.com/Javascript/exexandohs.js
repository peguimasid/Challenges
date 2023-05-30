/**
 * @param {string} str
 * @return {boolean}
 */
function XO(str) {
  const freq = str.split('').reduce(
    (acc, curr) => {
      if (!'xo'.includes(curr.toLowerCase())) return acc;
      acc[curr.toLowerCase()] += 1;
      return acc;
    },
    { x: 0, o: 0 }
  );

  return freq['x'] === freq['o'];
}

console.log(XO('xo')); // true
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('Oo')); // false
console.log(XO('ooom')); // false
