/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const threeSumMulti = (arr, target) => {
  let result = 0;

  let i = -1;

  while (i++ < arr.length - 3) {
    let j = i;
    while (j++ < arr.length - 2) {
      let k = j;
      while (k++ < arr.length - 1) {
        if (arr[i] + arr[j] + arr[k] === target) result++;
      }
    }
  }

  return result;
};

console.log(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8));
// length = 10 | last index = 9 | 7
