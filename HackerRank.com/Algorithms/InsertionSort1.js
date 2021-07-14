function insertionSort1(n, arr) {
  const currElem = arr[n - 1];

  for (var i = arr.length - 1; i >= 0 && arr[i] >= currElem; i--) {
    if (i !== arr.length - 1) console.log(...arr);
    arr[i] = arr[i - 1];
  }

  arr[i + 1] = currElem;
  console.log(...arr);
}

console.log(insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]));
