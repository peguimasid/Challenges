// Solution one

// function swap(idx1, idx2, array) {
//   let temp = array[idx1];
//   array[idx1] = array[idx2];
//   array[idx2] = temp;
// }

// function quickSort(array) {
//   let pivotSmallItems = 0;
//   let pivotIndex = 0;

//   for (let i = 0; i < array.length; i++) {
//     const currentValue = array[i];
//     if (currentValue < array[pivotIndex]) {
//       pivotSmallItems++;
//       swap(i, pivotSmallItems, array);
//     }
//   }

//   swap(pivotSmallItems, pivotIndex, array);

//   return array;
// }

// solution two (not in place)
function quickSort(array) {
  const equal = array.filter((num) => num === array[0]);
  const left = array.filter((num) => num < array[0]);
  const right = array.filter((num) => num > array[0]);

  return [...left, ...equal, ...right];
}

console.log(
  quickSort([
    -13, 68, -43, -71, -39, -10, 40, -49, -19, -3, -70, -62, -76, -94, -73, 64,
    72, -5, 88, 2, -63, 92, -40, 16, 49, 47, -86, -51, -9, -14, 96, 74, -22,
    -34, 38, -12, 6, 63, 19, -69, 14, -90, -27, 76, 54, 57, -87, -91, 43, -92,
  ])
);
