function knapsackLight(value1, weight1, value2, weight2, maxWeight) {
  return Math.max(
    maxWeight >= weight1 && value1,
    maxWeight >= weight2 && value2,
    maxWeight >= weight1 + weight2 && value1 + value2
);
}

console.log(knapsackLight(10, 5, 6, 4, 9))