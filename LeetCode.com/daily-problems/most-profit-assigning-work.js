/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
function maxProfitAssignment(difficulty, profit, worker) {
  let result = 0;

  for (const ability of worker) {
    let maxProfit = 0;

    for (let i = 0; i < difficulty.length; i++) {
      if (difficulty[i] <= ability && profit[i] > maxProfit) {
        maxProfit = profit[i];
      }
    }

    result += maxProfit;
  }

  return result;
}

// prettier-ignore
console.log(maxProfitAssignment([2,4,6,8,10], [10,20,30,40,50], [4,5,6,7]))

// prettier-ignore
console.log(maxProfitAssignment([85,47,57], [24,66,99], [40,25,25]))
