/**
 * @param {number[][]} intervals
 * @return {number}
 */
const removeCoveredIntervals = (intervals) => {
  intervals.sort(([a1, a2], [b1, b2]) => a1 - b1 || b2 - a2);

  let result = 0;
  let biggestEndTime = 0;

  for (const [, endTime] of intervals) {
    if (biggestEndTime < endTime) result++;
    biggestEndTime = Math.max(endTime, biggestEndTime);
  }

  return result;
};

// prettier-ignore
console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]))
