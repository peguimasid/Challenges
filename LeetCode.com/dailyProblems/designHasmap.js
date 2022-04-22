class MyHashMap {
  constructor() {
    this.map = {};
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    this.map[key] = value;
  }

  /**
   *@param {number} key
   * @return {number}
   */
  get(key) {
    return this.map[key] ?? -1;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    delete this.map[key];
  }
}

var obj = new MyHashMap();
obj.put('a', 1);
var param_2 = obj.get('a');
obj.remove('a');
