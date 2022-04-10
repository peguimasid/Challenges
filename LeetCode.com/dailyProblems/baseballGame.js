/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
  let points = [];

  for (const operation of ops) {
    if (RegExp(/[0-9]/g).test(operation)) {
      points.push(Number(operation));
    }
    if (operation === 'C') {
      points.pop();
    }
    if (operation === 'D') {
      points.push(points[points.length - 1] * 2);
    }
    if (operation === '+') {
      points.push(points[points.length - 1] + points[points.length - 2]);
    }
  }

  return points.reduce((acc, curr) => acc + curr);
};

console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
console.log(calPoints(['5', '2', 'C', 'D', '+']));
