class Edge {
  /**
   * @param {number} begin
   * @param {number} end
   * @param {number} weight
   */

  constructor(begin, end, weight) {
    this.begin = begin;
    this.end = end;
    this.weight = weight;
  }
}

/**
 * Find the root vertice.
 * @param {number[]} parents
 * @param {number} i
 * @returns {number}
 */
const findRootVertex = function (parents, i) {
  while (parents[i] > 0) {
    i = parents[i];
  }

  return i;
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  /** @type {Edge[]}  */
  const edges = [];

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const weight =
        Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1]);

      edges.push(new Edge(i, j, weight));
    }
  }

  edges.sort((a, b) => a.weight - b.weight);

  const pointParents = Array(points.length).fill(0);

  let result = 0;

  for (const edge of edges) {
    const parent1 = findRootVertex(pointParents, edge.begin);
    const parent2 = findRootVertex(pointParents, edge.end);

    console.log(pointParents);
    console.log(parent1, parent2);

    if (parent1 !== parent2) {
      pointParents[parent1] = parent2;
      result += edge.weight;
    }
  }

  return result;
};

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
);
