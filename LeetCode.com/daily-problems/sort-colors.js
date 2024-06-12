/**
 * @param {number[]} nums
 * @return {void}
 */
function sortColors(nums) {
  const count = [0, 0, 0];

  for (const num of nums) {
    count[num]++;
  }

  let index = 0;

  for (let i = 0; i < count.length; i++) {
    while (count[i]-- > 0) {
      nums[index++] = i;
    }
  }
}

const colors = [2, 0, 2, 1, 1, 0];
sortColors(colors);
console.log(colors);
