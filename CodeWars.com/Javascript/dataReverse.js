function dataReverse(data) {
  let result = [];

  let currentBucket = [];

  for (let i = 0; i <= data.length; i++) {
    if (currentBucket.length === 8) {
      result.unshift(...currentBucket);
      currentBucket = [];
    }

    currentBucket.push(data[i]);
  }

  return result;
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);
