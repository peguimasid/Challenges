// O(n)
function rotateLeft(d, arr) {
  return d ? rotateLeft(--d, arr.slice(1).concat(arr[0])) : arr;
}

// O(1)
function rotateLeft(d, arr) {
  return arr.slice(d).concat(arr.slice(0, d));
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]));
