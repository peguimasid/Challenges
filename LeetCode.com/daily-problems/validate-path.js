/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
  if (source === destination) return true;

  const adjacencyList = edges.reduce((acc, [src, dest]) => {
    if (!acc.has(src)) acc.set(src, []);
    if (!acc.has(dest)) acc.set(dest, []);

    acc.set(src, [...acc.get(src), dest]);
    acc.set(dest, [...acc.get(dest), src]);
    return acc;
  }, new Map());

  const visited = new Set();
  let result = false;

  function findPath(src) {
    if (result) return;
    const neighbors = adjacencyList.get(src);

    visited.add(src);

    for (const neighbor of neighbors) {
      if (neighbor === destination) result = true;
      if (!visited.has(neighbor)) findPath(neighbor);
    }

    return false;
  }

  findPath(source);

  return result;
}

// prettier-ignore
console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2)) // true

// prettier-ignore
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)) // false

// prettier-ignore
console.log(validPath(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9)) // true
