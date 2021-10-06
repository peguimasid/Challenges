function maxMin(k, arr) {
  return arr
    .sort((a, b) => a - b)
    .reduce((acc, currentVal, index, originalArray) => {
      const candidate = originalArray[index + k - 1] - currentVal;

      return candidate < acc ? candidate : acc;
    }, Infinity);
}

// console.log(maxMin(2, [1, 4, 7, 2])); // 1
// console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30])); // 20
// console.log(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200])); // 20
// console.log(maxMin(2, [1, 2, 1, 2, 1])); // 20
console.log(
  maxMin(
    5,
    [
      4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948,
      2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232,
    ]
  )
); // 1335
