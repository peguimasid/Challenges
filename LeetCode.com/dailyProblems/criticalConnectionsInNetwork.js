/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = (n, connections) => {
  let adj = connections.reduce((acc, [a, b]) => {
    if (!acc[a]) acc[a] = [];
    if (!acc[b]) acc[b] = [];
    acc[a].push(b);
    acc[b].push(a);
    return acc;
  }, {});

  const visitedNodes = Array(n).fill(false);
  const discovery = Array(n).fill(0);
  const min = Array(n).fill(0);
  const parent = Array(n).fill(-1);
  const result = [];

  let distance = 1;

  const traverse = (node) => {
    visitedNodes[node] = true;

    discovery[node] = min[node] = distance++;

    for (const children of adj[node]) {
      if (!visitedNodes[children]) {
        parent[children] = node;
        traverse(children);
        min[node] = Math.min(min[node], min[children]);
        if (min[children] > discovery[node]) result.push([node, children]);
      } else if (children !== parent[node]) {
        min[node] = Math.min(min[node], discovery[children]);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visitedNodes[i]) {
      traverse(i);
    }
  }

  return result;
};

console.log(
  criticalConnections(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ])
);
