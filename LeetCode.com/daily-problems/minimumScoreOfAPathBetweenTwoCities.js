/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = (n, roads) => {
  const graph = new Array(n + 1).fill().map(() => []);
  const visitedNodes = new Set([]);

  for (const [v1, v2, distance] of roads) {
    graph[v1].push([v2, distance]);
    graph[v2].push([v1, distance]);
  }

  const queue = [1];
  visitedNodes.add(1);
  let result = Number.MAX_SAFE_INTEGER;

  while (queue.length) {
    const node = queue.shift();
    for (const [neighbor, distance] of graph[node]) {
      result = Math.min(result, distance);
      if (!visitedNodes.has(neighbor)) {
        visitedNodes.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
};

console.log(
  minScore(4, [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7],
  ])
); // 5
console.log(
  minScore(4, [
    [1, 2, 2],
    [1, 3, 4],
    [3, 4, 7],
  ])
); // 5
