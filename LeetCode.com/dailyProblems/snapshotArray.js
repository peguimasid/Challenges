/**
 * @param {number} length
 */
class SnapshotArray {
  constructor(length) {
    this.values = new Map();
    this.maxSize = length;
    this.snapshots = new Map();
    this.snap_id = 0;
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  set(index, val) {
    if (index < 0 || index >= this.maxSize) return;
    this.values.set(index, val);
  }
  /**
   * @return {number}
   */
  snap() {
    this.snapshots.set(this.snap_id, new Map(this.values));
    return this.snap_id++;
  }
  /**
   * @param {number} index
   * @param {number} snap_id
   * @return {number}
   */
  get(index, snap_id) {
    if (!this.snapshots.has(snap_id)) return null;

    return this.snapshots.get(snap_id).get(index) || 0;
  }
}

const snapshotArr = new SnapshotArray(3); // set the length to be 3
snapshotArr.set(0, 5); // Set array[0] = 5
console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 0
snapshotArr.set(0, 6);
console.log(snapshotArr.get(0, 0)); // Get the value of array[0] with snap_id = 0, return 5
