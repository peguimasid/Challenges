const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter((n) => n > a[i])));

// console.log(leastLarger([4, 1, 3, 5, 6], 0));
// console.log(leastLarger([4, 1, 3, 5, 6], 4));
console.log(leastLarger([1, 3, 5, 2, 4], 0));
