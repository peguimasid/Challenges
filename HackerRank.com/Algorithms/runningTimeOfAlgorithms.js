function runningTime(array) {
  let result = 0;

  for (let i = 1; i < array.length; i++) {
    const currentVal = array[i];

    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
      result++;
    }

    array[j + 1] = currentVal;
  }

  return result;
}

console.log(runningTime([2, 1, 3, 1, 2]));
