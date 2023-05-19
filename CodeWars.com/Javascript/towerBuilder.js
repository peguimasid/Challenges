/**
 * @param {number} nFloors
 * @return {string[]}
 */
const towerBuilder = (nFloors) => {
  const lastFloorChars = nFloors * 2 - 1;

  return Array(nFloors)
    .fill()
    .map((_, index) => {
      const astNum = (index + 1) * 2 - 1;
      const spaceNum = lastFloorChars - astNum;
      return `${' '.repeat(spaceNum / 2)}${'*'.repeat(astNum)}${' '.repeat(
        spaceNum / 2
      )}`;
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
