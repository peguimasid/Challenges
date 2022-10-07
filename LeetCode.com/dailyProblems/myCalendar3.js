var MyCalendarThree = function () {
  this.tm = {};
};

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  this.tm[start] = (this.tm[start] || 0) + 1;
  this.tm[end] = (this.tm[end] || 0) - 1;
  let max = 0;
  let count = 0;
  for (let val in this.tm) {
    max = Math.max(max, (count += this.tm[val]));
  }
  return max;
};

const calendar = new MyCalendarThree();

console.log(calendar.book(10, 20));
console.log(calendar.book(50, 60));
console.log(calendar.book(10, 40));
console.log(calendar.book(5, 15));
console.log(calendar.book(5, 10));
console.log(calendar.book(25, 55));
