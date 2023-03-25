/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const checkXMatrix = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      const isDiagonal = i === j || i + j === grid.length - 1;
      if ((isDiagonal && grid[i][j] === 0) || (!isDiagonal && grid[i][j] !== 0))
        return false;
    }
  }

  return true;
};

// prettier-ignore
const g1 = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]];
// prettier-ignore
const g2 = [[5,7,0],[0,3,1],[0,5,0]];
// prettier-ignore
const g3 =  [[6,0,0,0,0,0,0,18],[0,17,0,0,0,0,18,0],[0,0,13,0,0,17,0,0],[0,0,0,9,18,0,0,0],[0,0,0,2,20,0,0,0],[0,0,20,0,0,3,0,0],[0,14,0,0,0,0,11,0],[19,0,0,0,0,0,0,9]];

console.log(checkXMatrix(g1));
console.log(checkXMatrix(g2));
console.log(checkXMatrix(g3));
