function productFib(prod) {
  let firstCloseProduct = 0;
  let secondCloseProduct = 1;

  while (true) {
    if (firstCloseProduct * secondCloseProduct > prod) {
      return [firstCloseProduct, secondCloseProduct, false];
    }

    if (firstCloseProduct * secondCloseProduct === prod) {
      return [firstCloseProduct, secondCloseProduct, true];
    }

    let temp = secondCloseProduct;
    secondCloseProduct += firstCloseProduct;
    firstCloseProduct = temp;
  }
}

console.log(productFib(4895)); // [55, 89, true]
console.log(productFib(5895)); // [89, 144, false]
console.log(productFib(74049690)); // [6765, 10946, true]
console.log(productFib(84049690)); // [10946, 17711, false]
console.log(productFib(193864606)); // [10946, 17711, true]
console.log(productFib(447577)); // [610, 987, false]
console.log(productFib(602070)); // [610, 987, true]
