/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
const hardestWorker = (n, logs) => {
  let maxUnits = logs[0][1];
  let employeeId = logs[0][0];

  for (let i = 1; i < logs.length; i++) {
    const startTime = logs[i - 1][1];
    const [id, endTime] = logs[i];

    if (endTime - startTime === maxUnits) {
      maxUnits = endTime - startTime;
      employeeId = Math.min(id, employeeId);
    }
    if (endTime - startTime > maxUnits) {
      maxUnits = endTime - startTime;
      employeeId = id;
    }
  }

  return employeeId;
};

// prettier-ignore
console.log(hardestWorker(10, [[0, 3],[2, 5],[0, 9],[1, 15],])) // 1
// prettier-ignore
console.log(hardestWorker(70, [[36,3],[1,5],[12,8],[25,9],[53,11],[29,12],[52,14]])); // 12
