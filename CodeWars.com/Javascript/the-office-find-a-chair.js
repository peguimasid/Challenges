/**
 * @param {[string, number][]} x
 * @param {number} need
 * @return {number[] | string}
 */
function meeting(x, need) {
  if (need === 0) return "Game On";

  const result = [];

  for (const [people, chairs] of x) {
    const take = Math.min(Math.max(chairs - people.length, 0), need);

    result.push(take);
    need -= take;

    if (need <= 0) {
      return result;
    }
  }

  return "Not enough!";
}

// XXXXX -> number of occupants = 5
// 6 -> how many chairs that are in the room

// prettier-ignore
console.log(meeting([['XXX', 3], ['XXXXX', 9]], 3))
// [0, 3]

// prettier-ignore
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4))
// [0, 1, 3]

// prettier-ignore
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5))
// [0, 0, 1, 2, 2]

// prettier-ignore
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0))
// 'Game On'
