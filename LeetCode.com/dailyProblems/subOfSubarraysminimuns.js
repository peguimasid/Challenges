/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) min = arr[j];
      result += min;
    }
  }

  return result % (1e9 + 7);
};

// [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
console.log(sumSubarrayMins([3, 1, 2, 4]));

// [11], [81], [94], [43], [3], [11,81], [81,94], [94,43], [43,3]
// [11,81,94], [81,94,43], [94,43,3], [11,81,94,43], [81,94,43,3]
// [11,81,94,43,3]
console.log(sumSubarrayMins([11, 81, 94, 43, 3]));
