/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = (numBottles, numExchange) => {
  let drinkedBottles = numBottles;
  let fullBottles = 0;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    fullBottles = Math.floor(emptyBottles / numExchange);
    drinkedBottles += fullBottles;
    emptyBottles = fullBottles + (emptyBottles % numExchange);
  }

  return drinkedBottles;
};

console.log(numWaterBottles(9, 3)); // 13
console.log(numWaterBottles(15, 4)); // 19
console.log(numWaterBottles(5, 5)); // 6
console.log(numWaterBottles(5, 5)); // 6
