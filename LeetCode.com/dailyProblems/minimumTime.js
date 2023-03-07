/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
const minimumTime = (time, totalTrips) => {
  let t = 0;

  while (true) {
    t++;
    const currentTrips = time.map((time) => Math.floor(t / time));
    const totalTime = currentTrips.reduce((acc, curr) => acc + curr, 0);
    if (totalTime >= totalTrips) return t;
  }
};

console.log(minimumTime([1, 2, 3], 5));
console.log(minimumTime([2], 1));
