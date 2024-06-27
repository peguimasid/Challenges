/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
  const adjacencyList = edges.reduce((map, [n1, n2]) => {
    if (!map[n1]) map[n1] = [];
    if (!map[n2]) map[n2] = [];

    map[n1].push(n2);
    map[n2].push(n1);

    return map;
  }, {});

  for (const node in adjacencyList) {
    if (adjacencyList[node].length > 1) return node;
  }
}

const edges = [
  [1, 2],
  [2, 3],
  [4, 2],
];
const edges2 = [
  [1, 2],
  [5, 1],
  [1, 3],
  [1, 4],
];

console.log(findCenter(edges));
console.log(findCenter(edges2));
