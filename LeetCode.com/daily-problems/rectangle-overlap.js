/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
function isRectangleOverlap([ax1, ay1, ax2, ay2], [bx1, by1, bx2, by2]) {
  return ax1 < bx2 && ax2 > bx1 && ay1 < by2 && ay2 > by1;
}
