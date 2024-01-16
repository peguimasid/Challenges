class RandomizedSet {
  constructor() {
    this.set = {};
    this.size = 0;
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.set[val]) return false;

    this.set[val] = true;
    this.size++;

    return true;
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.set[val]) return false;

    delete this.set[val];
    this.size--;

    return true;
  }

  /**
   * @return {number}
   */
  getRandom() {
    return Object.keys(this.set)[Math.floor(Math.random() * this.size)];
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
