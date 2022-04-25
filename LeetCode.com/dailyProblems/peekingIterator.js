/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.currentValue = undefined;
};

/**
 * Returns the next element in the array without moving the pointer.
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (!this.currentValue) this.currentValue = this.iterator.next();

  return this.currentValue;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (!this.currentValue) return this.iterator.next();

  const result = this.currentValue;
  this.currentValue = undefined;
  return result;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.currentValue === undefined ? this.iterator.hasNext() : true;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
