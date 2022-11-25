/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = (arr) => {
  let subArrays = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      subArrays.push(arr.slice(i, j));
    }
  }

  return subArrays.reduce((acc, arr) => (acc += Math.min(...arr)), 0);
};

// [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
console.log(sumSubarrayMins([3, 1, 2, 4]));

// [11], [81], [94], [43], [3], [11,81], [81,94], [94,43], [43,3]
// [11,81,94], [81,94,43], [94,43,3], [11,81,94,43], [81,94,43,3]
// [11,81,94,43,3]
console.log(sumSubarrayMins([11, 81, 94, 43, 3]));
