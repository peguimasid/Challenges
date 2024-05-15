/**
 * @param {number[]} arr
 * @return {number}
 */
function arrayConversion(arr) {
  let count = 0;

  while (arr.length > 1) {
    const temp = [];
    for (let i = 0; i < arr.length; i += 2) {
      temp.push(count % 2 === 0 ? arr[i] + arr[i + 1] : arr[i] * arr[i + 1]);
    }
    arr = temp;
    count++;
  }

  return arr[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); // 186
console.log(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // 64
console.log(arrayConversion([3, 3, 5, 5])); // 60
