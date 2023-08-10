/**
 * @param {number} h
 * @param {number} bounce
 * @param {number} window
 * @return {number}
 */
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let result = 0;

  let currentHeight = h;

  while (currentHeight > window) {
    result += 2;
    currentHeight *= bounce;
    if (currentHeight <= window) result--;
  }

  return result;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3

console.log(bouncingBall(30.0, 0.66, 1.5)); // 15

console.log(bouncingBall(3.0, 1.0, 1.5)); // -1
