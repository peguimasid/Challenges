/**
 * @param {number[][]} edges
 * @return {object}
 */
const generateGraph = (edges) =>
  edges.reduce((acc, [src, dst]) => {
    if (!acc[src]) acc[src] = [];
    if (!acc[dst]) acc[dst] = [];
    acc[src].push(dst);
    acc[dst].push(src);
    return acc;
  }, {});

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = (n, edges, source, destination) => {
  if (!edges.length) return true;

  let result = false;
  const graph = generateGraph(edges);
  const visitedNodes = [];

  const traverse = (neighbours) => {
    for (const neighbor of neighbours) {
      if (neighbor === destination) return (result = true);
      if (!visitedNodes.includes(graph[neighbor])) {
        visitedNodes.push(graph[neighbor]);
        traverse(graph[neighbor]);
      }
    }
  };

  traverse(graph[source]);

  return result;
};

const grph = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];
console.log(validPath(6, grph, 0, 5));
