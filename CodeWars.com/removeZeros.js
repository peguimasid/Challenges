// function swap(array, i, j) {
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// function removeZeros(array) {
//   let swaps = 0;

//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }

//   return array;
// }

function filterZeros(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 || array[i] === '0') result.push(array[i]);
  }

  return result;
}

function filterNoZeros(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0 && array[i] !== '0') result.push(array[i]);
  }

  return result;
}

function removeZeros(array) {
  let zeros = filterZeros(array);
  let noZeros = filterNoZeros(array);
  console.log(zeros);

  return [...noZeros, ...zeros];
}

console.log(removeZeros([1, null, '5', '2', 8, 6, null, false, '0', 0]));
