/**
 * @param {number[]} piles
 * @param {number} speed
 * @return {number}
 */
const timeToEatAllBananasAtGivenSpeed = (piles, speed) => {
  return piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);
};

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
  let minSpeed = 1;
  let maxSpeed = Math.max(...piles);
  let bestSpeed = maxSpeed;

  while (minSpeed <= maxSpeed) {
    const midSpeed = Math.floor((minSpeed + maxSpeed) / 2);

    if (timeToEatAllBananasAtGivenSpeed(piles, midSpeed) <= h) {
      bestSpeed = midSpeed;
      maxSpeed = midSpeed - 1;
    } else {
      minSpeed = midSpeed + 1;
    }
  }

  return bestSpeed;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
