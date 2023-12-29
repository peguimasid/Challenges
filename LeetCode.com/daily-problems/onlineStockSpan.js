var StockSpanner = function () {
  this.spans = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.spans.push(price);

  let i = this.spans.length;
  let count = -1;
  while (i >= 0) {
    if (this.spans[i] > price) break;
    i--;
    count++;
  }
  return count;
};

const obj = new StockSpanner();
const param_1 = obj.next(100);
const param_2 = obj.next(80);
const param_3 = obj.next(60);
const param_4 = obj.next(70);
const param_5 = obj.next(60);
const param_6 = obj.next(75);
const param_7 = obj.next(85);

console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);
console.log(param_5);
console.log(param_6);
console.log(param_7);
console.log(obj);
