/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
function passThePillow(n, time) {
  const fullRounds = Math.floor(time / (n - 1));
  const extraTime = time % (n - 1);

  return fullRounds % 2 === 0 ? extraTime + 1 : n - extraTime;
}

console.log(passThePillow(4, 5)); // 2
console.log(passThePillow(3, 2)); // 3
console.log(passThePillow(8, 9)); // 6
