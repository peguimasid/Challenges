/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);

  let result = 0;
  let l = 0;
  let r = people.length - 1;

  while (l <= r) {
    if (people[l] + people[r] <= limit) l++;
    r--;
    result++;
  }

  return result;
}

console.log(numRescueBoats([1, 2], 3)); // 1
console.log(numRescueBoats([3, 2, 2, 1], 3)); // 3
console.log(numRescueBoats([3, 5, 3, 4], 5)); // 4
