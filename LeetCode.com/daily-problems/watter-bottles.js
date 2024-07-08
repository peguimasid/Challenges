/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles, numExchange) {
  let result = numBottles;

  let fullBottles = numBottles;
  let emptyBottles = 0;

  while (fullBottles + emptyBottles >= numExchange) {
    const totalBottles = fullBottles + emptyBottles;
    fullBottles = Math.floor(totalBottles / numExchange);
    emptyBottles = totalBottles % numExchange;
    result += fullBottles;
  }

  return result;
}

console.log(numWaterBottles(9, 3)); // 13
console.log(numWaterBottles(15, 4)); // 19
console.log(numWaterBottles(2, 3)); // 2
