var MyCalendar = function () {
  this.books = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.books.some(([s, e]) => end > s && start < e)) return false;
  return !!this.books.push([start, end]);
};

var obj = new MyCalendar();

var param_1 = obj.book(47, 50);
var param_2 = obj.book(33, 41);
var param_3 = obj.book(39, 45);
var param_4 = obj.book(33, 42);

console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);

console.log('obj>>>>', obj);

/////////
// var param_1 = obj.book(10, 20);
// var param_2 = obj.book(15, 25);
// var param_3 = obj.book(20, 30);
