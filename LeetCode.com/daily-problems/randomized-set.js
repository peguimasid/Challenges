class RandomizedSet {
  constructor() {
    this.set = new Set();
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.set.has(val)) return false;

    this.set.add(val);

    return true;
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.set.has(val)) return false;

    this.set.delete(val);

    return true;
  }

  /**
   * @return {number}
   */
  getRandom() {
    return [...this.set.values()][Math.floor(Math.random() * this.set.size)];
  }
}

const obj = new RandomizedSet();
obj.insert(10);
obj.insert(829);
obj.insert(783);
obj.insert(344);
obj.insert(809);
console.log(obj);
console.log(obj.getRandom());
