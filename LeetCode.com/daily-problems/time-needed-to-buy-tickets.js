/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
function timeRequiredToBuy(tickets, k) {
  let result = 0;

  let i = 0;
  while (true) {
    const index = i % tickets.length;
    if (tickets[index] > 0) {
      tickets[index]--;
      result++;
    }
    if (index === k && tickets[index] === 0) {
      return result;
    }
    i++;
  }
}

console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // 8
