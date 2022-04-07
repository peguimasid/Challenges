/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    if (stones[0] === stones[1]) {
      stones.splice(0, 2);
    } else {
      const x = stones[0];
      const y = stones[1];
      stones.splice(0, 1);
      stones[0] = Math.abs(y - x);
    }
    console.log('\n');
  }

  return stones[0] || 0;
};

console.log(lastStoneWeight([2, 2]));

// If | x == y |, both stones are destroyed, and
// If | x != y |, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
