function sortByBit(array) {
  return array.reduce((acc, curr) => acc + Math.pow(2, curr), 0);
}

console.log(sortByBit([]));
console.log(sortByBit([0]));
console.log(sortByBit([30, 0]));
console.log(sortByBit([0, 1]));
console.log(sortByBit([1, 2, 0, 4]));
