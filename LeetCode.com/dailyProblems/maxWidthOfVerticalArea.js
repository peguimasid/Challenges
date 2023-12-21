/**
 * @param {number[][]} points
 * @return {number}
 */
function maxWidthOfVerticalArea(points) {
  const xCoordinates = points.map(([x]) => x).sort((a, b) => a - b);

  let result = 0;

  for (let i = 1; i < xCoordinates.length; i++) {
    result = Math.max(result, xCoordinates[i] - xCoordinates[i - 1]);
  }

  return result;
}

// prettier-ignore
console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])) // 1

// prettier-ignore
console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])) // 3
