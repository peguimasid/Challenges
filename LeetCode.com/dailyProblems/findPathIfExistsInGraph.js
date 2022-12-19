/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = (n, edges, source, destination) => {
  if (!edges.length) return true;

  const graph = edges.reduce((acc, [src, dest]) => {
    if (!acc.has(src)) acc.set(src, []);
    if (!acc.has(dest)) acc.set(dest, []);
    acc.get(src).push(dest);
    acc.get(dest).push(src);
    return acc;
  }, new Map());

  const visitedNodes = new Set();

  const depthFirstSearch = (node) => {
    visitedNodes.add(node);
    for (const neighbor of graph.get(node)) {
      if (!visitedNodes.has(neighbor)) depthFirstSearch(neighbor);
    }
  };

  depthFirstSearch(source);

  return visitedNodes.has(destination);
};

const grph = [
  [0, 1],
  [1, 2],
  [2, 0],
];
console.log(validPath(3, grph, 0, 2));
