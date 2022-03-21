function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const isZero = (value) => value === 0 || value === '0';

function removeZeros(array) {
  let swaps = 0;

  let i = 0;

  while (i < array.length - swaps) {
    if (isZero(array[i])) {
      let j = i;

      while (j < array.length - 1) swap(array, j, ++j);

      swaps++;
    }

    if (!isZero(array[i])) i++;
  }

  return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, '0', 13, 0, 78, 0, 0, 19, 14]));
