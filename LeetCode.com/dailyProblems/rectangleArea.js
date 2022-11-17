/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
const computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
  let intersectionWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  let intersectionHeight = Math.min(ay2, by2) - Math.max(ay1, by1);
  intersectionWidth = Math.max(intersectionWidth, 0);
  intersectionHeight = Math.max(intersectionHeight, 0);
  const areaSum = (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1);
  return areaSum - intersectionHeight * intersectionWidth;
};

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
