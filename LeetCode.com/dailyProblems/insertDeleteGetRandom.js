class RandomizedSet {
  constructor() {
    this.arr = [];
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.arr.includes(val)) return false;
    this.arr.push(val);
    return true;
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    const indexOfElement = this.arr.indexOf(val);
    if (indexOfElement === -1) return false;
    this.arr.splice(indexOfElement, 1);
    return true;
  }
  /**
   * @return {number}
   */
  getRandom() {
    const random = Math.floor(Math.random() * 1000) % this.arr.length;
    return this.arr[random];
  }
}

var obj = new RandomizedSet();
var param_1 = obj.insert(1);
console.log(param_1); // true
var param_2 = obj.remove(2);
console.log(param_2); // false
var param_3 = obj.insert(2);
console.log(param_3); // true
var param_4 = obj.getRandom();
console.log(param_4); // 2
var param_5 = obj.remove(1);
console.log(param_5); // true
var param_6 = obj.insert(2);
console.log(param_6); // false
var param_7 = obj.getRandom();
console.log(param_7); // 2
