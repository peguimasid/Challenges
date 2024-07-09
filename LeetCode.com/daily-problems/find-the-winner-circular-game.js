/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function findTheWinner(n, k) {
  const queue = [];

  for (let i = 1; i <= n; i++) queue.push(i);

  let index = 0;

  while (queue.length > 1) {
    const toRemove = (index + k - 1) % queue.length;
    queue.splice(toRemove, 1);
    index = toRemove;
  }

  return queue[0];
}

console.log(findTheWinner(5, 2)); // 3
