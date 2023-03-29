/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {
  const [[firstX, firstY], [secondX, secondY]] = coordinates;
  const a = secondY - firstY;
  const b = secondX - firstX;

  return coordinates.every(
    ([x, y]) => a * (x - firstX) - b * (y - firstY) === 0
  );
};

// prettier-ignore
console.log(checkStraightLine([[1, 2],[2, 3],[3, 4],[4, 5],[5, 6],[6, 7]]));
// prettier-ignore
console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));
