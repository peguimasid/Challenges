/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  const cities = new Set();

  for (const [origin] of paths) {
    cities.add(origin);
  }

  for (const [, destination] of paths) {
    if (!cities.has(destination)) return destination;
  }

  return '';
}

const p1 = [
  ['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
];

console.log(destCity(p1));

const p2 = [
  ['B', 'C'],
  ['D', 'B'],
  ['C', 'A'],
];

console.log(destCity(p2));

const p3 = [['A', 'Z']];

console.log(destCity(p3));
