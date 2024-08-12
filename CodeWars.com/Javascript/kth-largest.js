class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.nums = nums;
    this.k = k;
  }
  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.nums.push(val);
    this.nums = this.nums.toSorted((a, b) => b - a);
    return this.nums[this.k - 1];
  }
}

const obj = new KthLargest(3, [4, 5, 8, 2]);

console.log(obj.add(3)); // 4
console.log(obj.add(5)); // 5
console.log(obj.add(10)); // 5
console.log(obj.add(9)); // 8
console.log(obj.add(4)); // 8
