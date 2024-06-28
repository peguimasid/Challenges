/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
function maximumImportance(n, roads) {
  const importance = new Array(n).fill(0);

  const adjacencyList = roads.reduce((map, [n1, n2]) => {
    if (!map[n1]) map[n1] = [];
    if (!map[n2]) map[n2] = [];
    map[n1].push(n2);
    map[n2].push(n1);
    return map;
  }, {});

  const entries = Object.entries(adjacencyList).toSorted(
    (a, b) => b[1].length - a[1].length
  );

  for (let i = n - 1; i >= 0; i--) {
    if (entries[i]) {
      importance[entries[i][0]] = n - i;
    }
  }

  let result = 0;

  for (const [src, dest] of roads) {
    result += importance[src] + importance[dest];
  }

  return result;
}

// prettier-ignore
const r = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
// console.log(maximumImportance(5, r));

// prettier-ignore
const r2 = [[0,3],[2,4],[1,3]]
// console.log(maximumImportance(5, r2));

// prettier-ignore
const r3 = [[0,1]]
console.log(maximumImportance(5, r3));
