function getClosestMultiple(number, div) {
  while (number >= 0) {
    if (number % div === 0) return number;
    number--;
  }
}

// console.log(getClosestMultiple(40, 3));

const solve = (nums, div) =>
  nums.map((number) => (number += number - getClosestMultiple(number, div)));

console.log(solve([2, 7, 5, 9, 100, 34, 32, 0], 3)); // [4, 8, 7, 9, 101, 35, 34, 0]
console.log(solve([1000, 999, 998, 997], 5)); // [1000, 1003, 1001, 999]
