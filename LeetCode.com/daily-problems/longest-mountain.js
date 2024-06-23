/**
 * @param {number[]} arr
 * @return {number}
 */
function longestMountain(arr) {
  const N = arr.length;
  if (N < 3) return 0;

  let result = 0;

  for (let i = 1; i < N - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let left = i - 1;
      let right = i + 1;

      while (left > 0 && arr[left] > arr[left - 1]) left--;
      while (right < N - 1 && arr[right] > arr[right + 1]) right++;

      result = Math.max(result, right - left + 1);
    }
  }

  return result;
}

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // 5
console.log(longestMountain([2, 2, 2])); // 0
