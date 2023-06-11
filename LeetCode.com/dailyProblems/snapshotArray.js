/**
 * @param {number} length
 */
class SnapshotArray {
  constructor(length) {
    this.snapshots = {};
    this.snap_id = 0;
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  set(index, val) {
    if (!this.snapshots[this.snap_id]) {
      this.snapshots[this.snap_id] = [];
    }

    this.snapshots[this.snap_id][index] = val;
  }
  /**
   * @return {number}
   */
  snap() {
    return this.snap_id++;
  }
  /**
   * @param {number} index
   * @param {number} snap_id
   * @return {number}
   */
  get(index, snap_id) {
    for (let i = snap_id; i >= 0; i--) {
      if (this.snapshots?.[i]?.[index] !== undefined) {
        return this.snapshots[i][index];
      }
    }

    return 0;
  }
}

const snapshotArr = new SnapshotArray(3); // set the length to be 3
snapshotArr.set(0, 5); // Set array[0] = 5
console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 0
snapshotArr.set(0, 6);
console.log(snapshotArr.get(0, 0)); // Get the value of array[0] with snap_id = 0, return 5
