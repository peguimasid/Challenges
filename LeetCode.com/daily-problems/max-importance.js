/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
function maximumImportance(n, roads) {
  const importance = new Array(n).fill(0);

  for (const [src, dest] of roads) {
    importance[src]++;
    importance[dest]++;
  }

  const cities = new Array(n)
    .fill(0)
    .map((_, i) => i)
    .toSorted((a, b) => importance[b] - importance[a]);

  let result = 0;

  for (let i = 0; i < n; i++) {
    result += (n - i) * importance[cities[i]];
  }

  return result;
}

// prettier-ignore
const r = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
console.log(maximumImportance(5, r));

// prettier-ignore
const r2 = [[0,3],[2,4],[1,3]]
console.log(maximumImportance(5, r2));

// prettier-ignore
const r3 = [[0,1]]
console.log(maximumImportance(5, r3));
