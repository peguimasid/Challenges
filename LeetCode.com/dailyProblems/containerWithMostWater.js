/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    const firstColumnHeight = height[i];

    for (let j = i + 1; j < height.length; j++) {
      const secondColumnHeight = height[j];
      const width = j - i;

      let volume = Math.min(firstColumnHeight, secondColumnHeight) * width;

      if (volume > result) result = volume;
    }
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
