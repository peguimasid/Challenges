/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let result = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let currentSquareArea = (r - l) * Math.min(height[l], height[r]);
    result = Math.max(result, currentSquareArea);

    height[l] < height[r] ? l++ : r--;
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
