function insertionSort2(n, array) {
  for (let i = 1; i < n; i++) {
    const currentVal = array[i];

    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = currentVal;
    console.log(array);
  }

  return array;
}

console.log(insertionSort2(7, [3, 4, 7, 5, 6, 2, 1]));
