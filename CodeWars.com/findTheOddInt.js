function findOdd(numbersArray) {
  let frequencyCounter = numbersArray.reduce((acc, num) => {
    acc[num] ? acc[num]++ : (acc[num] = 1);
    return acc;
  }, {});

  for (const key in frequencyCounter) {
    if (frequencyCounter[key] % 2) return Number(key);
  }

  return 0;
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
