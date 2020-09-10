function avoidObstacles(arr, k = 2) {
  return arr.every(element => element % k) ? k : avoidObstacles(arr, k + 1);
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));