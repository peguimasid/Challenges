/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = (n, dislikes) => {
  if (n === 1) return true;

  const graph = dislikes.reduce((acc, [personA, personB]) => {
    if (!acc.has(personA)) acc.set(personA, []);
    if (!acc.has(personB)) acc.set(personB, []);
    acc.get(personA).push(personB);
    acc.get(personB).push(personA);
    return acc;
  }, new Map());

  const visitedNodes = new Array(n + 1).fill(0);

  const dfs = (num, mark) => {
    if (visitedNodes[num]) return visitedNodes[num] === mark;
    if (!graph.has(num)) return true;
    visitedNodes[num] = mark;
    for (const neighbor of graph.get(num)) {
      if (!dfs(neighbor, ~mark)) return false;
    }
    return true;
  };

  for (let i = 1; i <= n; i++) {
    if (!visitedNodes[i] && !dfs(i, 1)) return false;
  }

  return true;
};

// prettier-ignore
const ga = [[1, 2],[1, 3],[2, 4]];
console.log(possibleBipartition(4, ga));
// prettier-ignore
const gb = [[1,2],[1,3],[2,3]];
console.log(possibleBipartition(3, gb));
// prettier-ignore
const gc = [[1,2],[2,3],[3,4],[4,5],[1,5]];
console.log(possibleBipartition(3, gc));
