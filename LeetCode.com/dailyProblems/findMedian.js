var MedianFinder = function () {
  this.nums = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.nums.push(num);
  this.nums.sort((a, b) => a - b);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.nums.length % 2 === 0)
    return (
      (this.nums[this.nums.length / 2] + this.nums[this.nums.length / 2 - 1]) /
      2
    );

  return this.nums[Math.floor(this.nums.length / 2)];
};

var obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
console.log(obj.findMedian());
obj.addNum(3);
console.log(obj.findMedian());
