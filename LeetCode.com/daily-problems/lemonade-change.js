/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
  let billsCount = { 5: 0, 10: 0 };

  for (const bill of bills) {
    if (bill === 5) {
      billsCount[5]++;
    } else if (bill === 10) {
      if (billsCount[5] > 0) {
        billsCount[10]++;
        billsCount[5]--;
      } else {
        return false;
      }
    } else if (bill === 20) {
      if (billsCount[5] > 0 && billsCount[10] > 0) {
        billsCount[10]--;
        billsCount[5]--;
      } else if (billsCount[5] >= 3) {
        billsCount[5] -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
console.log(lemonadeChange([5, 5, 10, 10, 20])); // false
