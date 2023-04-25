class SmallestInfiniteSet {
  constructor() {
    this.array = new Array(1000).fill(true);
  }
  /**
   * @return {number}
   */
  popSmallest() {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i]) {
        this.array[i] = false;
        return i + 1;
      }
    }
  }
  /**
   * @param {number} num
   * @return {void}
   */
  addBack(num) {
    this.array[num - 1] = true;
  }
}

const smallestInfiniteSet = new SmallestInfiniteSet();
console.log(smallestInfiniteSet.addBack(2)); // 2 is already in the set, so no change is made.
console.log(smallestInfiniteSet.popSmallest()); // return 1, since 1 is the smallest number, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest()); // return 2, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest()); // return 3, and remove it from the set.
console.log(smallestInfiniteSet.addBack(1)); // 1 is added back to the set.
console.log(smallestInfiniteSet.popSmallest()); // return 1, since 1 was added back to the set and
// is the smallest number, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest()); // return 4, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest()); // return 5, and remove it from the set.
