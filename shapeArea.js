function shapeArea(n) {
  let area = 1;

  for(let i = 0; i < n; i++) {
    area += 4 * i;

    // n = 1) 1 + 4 * 0 = 1

    // n = 2) 1 + 4 * 0 = 1
    //        1 + 4 * 1 = •••5•••

    // n = 3) 1 + 4 * 0 = 1
    //        1 + 4 * 1 = 5
    //        5 + 4 * 2 = •••13•••

    // n = 4) 1 + 4 * 0 = 1
    //        1 + 4 * 1 = 5
    //        5 + 4 * 2 = 13
    //       13 + 4 * 3 = •••25•••
  }

  return area;
}

console.log(shapeArea(2))