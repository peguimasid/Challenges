/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
const minimumTime = (time, totalTrips) => {
  let left = 0;
  let right = Number.MAX_SAFE_INTEGER;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    let completedTrips = 0;
    for (const t of time) {
      completedTrips += Math.floor(mid / t);
      if (completedTrips >= totalTrips) break;
    }
    if (completedTrips >= totalTrips) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minimumTime([1, 2, 3], 5));
