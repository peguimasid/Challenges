/**
 * @param {number} nFloors
 * @return {string[]}
 */
const towerBuilder = (nFloors) => {
  return Array(nFloors)
    .fill()
    .map((_, index) => {
      const spaces = ' '.repeat(nFloors - index - 1);
      return `${spaces}${'*'.repeat(index * 2 + 1)}${spaces}`;
    });
};

console.log(towerBuilder(1)); // ["*"]
console.log(towerBuilder(2)); // [" * ","***"]
console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
console.log(towerBuilder(4));
console.log(towerBuilder(5));
console.log(towerBuilder(6));

// 1 => 1
// 2 => 3
// 3 => 5
// 4 => 7
// 5 => 9
// 6 => 11
