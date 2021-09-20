function marcsCakewalk(calorie) {
  return calorie
    .sort((a, b) => b - a)
    .reduce((acc, currentCake, index) => {
      return acc + Math.pow(2, index) * currentCake;
    }, 0);
}

console.log(marcsCakewalk([5, 10, 7]));
