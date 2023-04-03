/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
  people.sort((a, b) => b - a);
  let result = 0;
  let len = people.length;

  let i = 0;
  while (i < len) {
    if (people[i] + people[len - 1] <= limit) len--;
    i++;
    result++;
  }

  return result;
};

console.log(numRescueBoats([1, 2], 3)); // 1
console.log(numRescueBoats([3, 2, 2, 1], 3)); // 3
console.log(numRescueBoats([3, 5, 3, 4], 5)); // 4
console.log(numRescueBoats([5, 1, 4, 2], 6)); // 2
