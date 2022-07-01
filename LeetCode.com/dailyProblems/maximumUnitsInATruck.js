/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let resultUnits = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    const [boxAmount, unitsInBox] = boxTypes[i];

    for (let j = 0; j < boxAmount; j++) {
      if (!truckSize) return resultUnits;

      resultUnits += unitsInBox;
      truckSize--;
    }
  }
  return resultUnits;
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
