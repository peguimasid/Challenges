/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]
    ? edges[0][0]
    : edges[0][1];
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
