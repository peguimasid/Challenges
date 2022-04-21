var MyHashSet = function () {
  this.list = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.list[key] = key;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  delete this.list[key];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return key in this.list;
};

var obj = new MyHashSet();
obj.add('a');
console.log(obj.contains('a'));
obj.remove('a');
console.log(obj.contains('a'));

console.log(obj);
