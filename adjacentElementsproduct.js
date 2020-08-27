function adjacentElementsProduct(array) {
  let graderMulltiply = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array.length - 1; i++) {
    if(array[i] * array[i + 1] > graderMulltiply) {
      graderMulltiply = array[i] * array[i + 1];
    }
  }

  return graderMulltiply;
}
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]))