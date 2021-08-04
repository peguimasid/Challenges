function countingSort(array) {
  let countValues = Array.from({ length: 100 }, () => 0);
  console.log(countValues.length);

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];

    countValues[currentValue]++;
  }

  return countValues;
}

console.log(
  countingSort([
    63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75,
    52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37,
    97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84,
    60, 35, 58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96,
    7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6,
    5, 24, 49, 82,
  ])
);
