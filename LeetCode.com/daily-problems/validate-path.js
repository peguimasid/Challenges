/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
  if (n === 1) return true;

  const visited = new Array(n).fill(false);
  visited[source] = true;
  let shouldRun = true;

  while (shouldRun) {
    shouldRun = false;
    for (const [src, dest] of edges) {
      if (visited[src] !== visited[dest]) {
        visited[src] = true;
        visited[dest] = true;
        shouldRun = true;
      }
      if (visited[destination]) return true;
    }
  }

  return false;
}

// prettier-ignore
console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2)) // true

// prettier-ignore
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)) // false

// prettier-ignore
console.log(validPath(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9)) // true
