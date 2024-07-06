/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
function passThePillow(n, time) {
  let currentPillowPosition = 1;
  let dir = 1;

  while (time) {
    const pos = currentPillowPosition + dir;

    if (pos > 0 && pos <= n) {
      currentPillowPosition += dir;
      time--;
    } else {
      dir *= -1;
    }
  }

  return currentPillowPosition;
}

console.log(passThePillow(4, 5)); // 2
console.log(passThePillow(3, 2)); // 3
console.log(passThePillow(8, 9)); // 6
