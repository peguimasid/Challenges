/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = (fruits) => {
  let result = 0;

  for (let i = 0; i < fruits.length; i++) {
    let basketOne = null;
    let basketTwo = null;
    let currentCount = 0;

    for (let j = i; j < fruits.length; j++) {
      const currentFruit = fruits[j];
      if (
        basketOne !== null &&
        basketTwo !== null &&
        ![basketOne, basketTwo].includes(currentFruit)
      ) {
        break;
      }
      if (basketOne === null) {
        basketOne = currentFruit;
      } else if (basketTwo === null && currentFruit !== basketOne) {
        basketTwo = currentFruit;
      }
      currentCount++;
    }
    if (currentCount > result) result = currentCount;
  }

  return result;
};

console.log(totalFruit([0, 0, 1, 1])); // 4

console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([1, 2, 3, 2, 2])); // 4
