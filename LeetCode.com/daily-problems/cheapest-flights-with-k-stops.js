/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
function findCheapestPrice(n, flights, src, dst, k) {
  const adj = new Map();

  for (const [from, to, price] of flights) {
    if (!adj.has(from)) adj.set(from, []);
    adj.get(from).push([to, price]);
  }

  // keeps track of the minimum price to reach each city from `src`
  const dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  dist[src] = 0;

  const queue = [[src, 0]];

  let stops = 0;

  while (queue.length && stops <= k) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [node, distance] = queue.shift();

      if (!adj.has(node)) continue;

      for (const [neighbor, price] of adj.get(node)) {
        if (price + distance >= dist[neighbor]) continue;
        dist[neighbor] = price + distance;
        queue.push([neighbor, dist[neighbor]]);
      }
    }

    stops++;
  }

  if (dist[dst] === Number.MAX_SAFE_INTEGER) return -1;

  return dist[dst];
}

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1
  )
); // 700

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    1
  )
); // 200

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    0
  )
); // 500
