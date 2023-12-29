/**
 * @param {Array} queue
 * @param {Number} num
 */
function add(queue, num) {
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] > num) {
      queue.splice(i, 0, num);
      return;
    }
  }
  queue.push(num);
}

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = (heights, bricks, ladders) => {
  let i = 0;
  let queue = [];

  while (i < heights.length) {
    i++;
    const heightDiff = heights[i] - heights[i - 1];
    if (heightDiff <= 0) continue;
    add(queue, heightDiff);
    if (queue.length <= ladders) continue;
    bricks -= queue[0];
    if (bricks < 0) return i - 1;
    queue.shift();
  }

  return heights.length - 1;
};

console.log(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1));
console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2));
console.log(furthestBuilding([14, 3, 19, 3], 17, 0));
