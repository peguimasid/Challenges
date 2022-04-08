/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
  this.nums = nums;
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.nums.push(val);
  return this.nums.sort((a, b) => b - a)[this.k - 1];
};

var obj = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj.add(3)); // return 4
console.log(obj.add(5)); // return 5
console.log(obj.add(10)); // return 5
console.log(obj.add(9)); // return 8
console.log(obj.add(4)); // return 8

//  | KthLargest(int k, int[] nums) |
//  => Initializes the object with the integer k and the stream of integers nums.

//  | add(int val) |
//  => Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
