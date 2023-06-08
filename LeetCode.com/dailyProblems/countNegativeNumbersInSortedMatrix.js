/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = (grid) => {
  return grid.reduce(
    (acc, curr) => (acc += curr.filter((num) => num < 0).length),
    0
  );
};

// prettier-ignore
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])) // 8
// prettier-ignore
console.log(countNegatives([[3,2],[1,0]])) // 0
