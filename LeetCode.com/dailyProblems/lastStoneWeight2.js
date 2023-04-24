/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    console.log(stones);
    const last = stones.pop();
    const secondToLast = stones.pop();
    if (last !== secondToLast) stones.push(last - secondToLast);
  }
  return stones[0] ?? 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([2, 2]));
