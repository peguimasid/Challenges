/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = (arr) => {
  const ascSorted = [...arr.sort((a, b) => a - b)];
  const descSorted = [...arr.sort((a, b) => b - a)];

  const diffAsc = ascSorted[0] - ascSorted[1];
  const diffDesc = descSorted[0] - descSorted[1];

  let result = true;

  for (let i = 1; i < arr.length; i++) {
    const current = ascSorted[i];
    const previous = ascSorted[i - 1];

    if (previous - current != diffAsc) {
      result = false;
      break;
    }
  }

  for (let i = 1; i < arr.length; i++) {
    const current = descSorted[i];
    const previous = descSorted[i - 1];

    if (previous - current != diffDesc) {
      result = false;
      break;
    }
  }

  return result;
};

console.log(canMakeArithmeticProgression([3, 5, 1])); // true
console.log(canMakeArithmeticProgression([1, 2, 4])); // false
