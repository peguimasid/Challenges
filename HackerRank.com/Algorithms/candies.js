function candies(n, arr) {
  let a = 1;
  let c = [a];
  let a1 = 1;

  for (let i = 0; i + 1 < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      a++;
    } else {
      a = 1;
    }
    c.push(a);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (a1 > c[i]) {
      c.splice(i, 1, a1);
    }
    if (arr[i] < arr[i - 1]) {
      a1++;
    } else {
      a1 = 1;
    }
  }
  return c.reduce((ac, n) => ac + n);
}

// console.log(candies(6, [4, 6, 4, 5, 6, 2]));

// console.log(candies(3, [1, 2, 2]));
console.log(candies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]));
//                          1  2  1  2  1  2  3  4  2  1
//                          1  2  1  2  1  2  3  4  2  1
