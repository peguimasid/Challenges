function countingSort(array) {
  let countValues = Array.from({ length: 100 }, () => 0);
  console.log(countValues.length);

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];

    countValues[currentValue]++;
  }

  let result = [];

  for (let i = 0; i < countValues.length; i++) {
    const currentValue = countValues[i];

    for (let j = 0; j < currentValue; j++) {
      console.log(i);
      result.push(i);
    }
  }

  return result;
}

console.log(countingSort([19, 10, 12, 10, 24, 25, 22]));
