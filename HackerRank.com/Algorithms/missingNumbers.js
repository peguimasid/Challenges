function missingNumbers(arr, brr) {
  let frequencyCounter = {};

  for (const number of brr) {
    frequencyCounter[number]
      ? frequencyCounter[number]++
      : (frequencyCounter[number] = 1);
  }

  for (const number of arr) {
    if (frequencyCounter[number]) frequencyCounter[number]--;
  }

  let result = [];

  for (const key in frequencyCounter) {
    if (frequencyCounter[key] > 0) result.push(key);
  }

  return result;
}

console.log(
  missingNumbers(
    [11, 4, 11, 7, 13, 4, 12, 11, 10, 14],
    [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12]
  )
);

// console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]));
