/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
function getAncestors(n, edges) {
  const result = Array.from({ length: n }, () => new Set());

  const adjList = edges.reduce((map, [from, to]) => {
    if (!map[from]) map[from] = [];
    if (!map[to]) map[to] = [];
    map[from].push(to);
    return map;
  }, {});

  function traverse(node, path) {
    for (const val of path) {
      result[node].add(val);
    }

    for (const neighbor of adjList[node]) {
      traverse(neighbor, new Set(path).add(node));
    }
  }

  for (const node in adjList) {
    traverse(Number(node), new Set());
  }

  return result.map((set) => [...set].toSorted((a, b) => a - b));
}

// prettier-ignore
const e1 = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
console.log(JSON.stringify(getAncestors(8, e1)));
// [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]

// prettier-ignore
const e2 = [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// console.log(getAncestors(5, e2));
// [[],[0],[0,1],[0,1,2],[0,1,2,3]]
