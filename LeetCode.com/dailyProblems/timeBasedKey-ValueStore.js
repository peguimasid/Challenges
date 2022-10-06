var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) this.map.set(key, []);
  this.map.get(key)[timestamp] = value;
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return '';
  const item = this.map.get(key);
  for (let i = timestamp; i >= 0; i--) if (item[i]) return item[i];

  return '';
};

const timeMap = new TimeMap();
timeMap.set('foo', 'bar', 1); // store the key "foo" and value "bar" along with timestamp = 1.
console.log(timeMap.get('foo', 1)); // return "bar"
console.log(timeMap.get('foo', 3)); // return "bar", si,nce there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set('foo', 'bar2', 4); // store the key "foo" and value "bar2" along with timestamp = 4.
// console.log(timeMap.get("foo", 4))         // return "bar2"
// console.log(timeMap.get("foo", 5))         // return "bar2"

console.log(timeMap);
