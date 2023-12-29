/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = (rec1, rec2) => {
  return (
    rec1[0] < rec2[2] &&
    rec2[0] < rec1[2] &&
    rec1[1] < rec2[3] &&
    rec2[1] < rec1[3]
  );
};

const rec1 = [0, 0, 2, 2];
const rec2 = [1, 1, 3, 3];

console.log(isRectangleOverlap(rec1, rec2));
