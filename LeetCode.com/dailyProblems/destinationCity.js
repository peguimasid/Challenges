/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  const pathsGraph = paths.reduce((acc, curr) => {
    const [startCity, endCity] = curr;
    acc[startCity] = [...(acc[startCity] || []), endCity];
    return acc;
  }, {});

  const findDestination = (city) => {
    if (!pathsGraph[city]) return city;
    const neighbors = pathsGraph[city];

    for (const neighbor of neighbors) {
      return findDestination(neighbor);
    }
  };

  return findDestination(paths[0][0]);
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
