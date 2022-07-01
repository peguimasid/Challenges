/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let result = 0;

  for (const [numberOfBoxes, unitsPerBox] of boxTypes) {
    const takeBoxes = Math.min(numberOfBoxes, truckSize);
    result += takeBoxes * unitsPerBox;
    truckSize -= takeBoxes;
    if (!truckSize) break;
  }

  return result;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);

console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);
// boxTypes[0] => numberOfBoxes
// boxTypes[1] => numberOfUnitsPerBox
