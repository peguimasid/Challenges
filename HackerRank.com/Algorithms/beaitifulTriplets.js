function beautifulTriplets(d, arr) {
  return arr.filter(
    (number) => arr.includes(number + d) && arr.includes(number + d * 2)
  ).length;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
