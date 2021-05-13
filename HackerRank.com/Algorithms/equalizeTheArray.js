function equalizeArray(arr) {
  const frequencyCounter = arr.reduce((acc, curr) => {
    acc[curr] = ++acc[curr] || 1;
    return acc;
  }, {});

  let moreAppears = 0;
  let moreAppearsTimes = Number.NEGATIVE_INFINITY;

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > moreAppearsTimes) {
      moreAppears = key;
      moreAppearsTimes = frequencyCounter[key];
    }
  }

  return arr.length - arr.filter((num) => num == moreAppears).length;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
