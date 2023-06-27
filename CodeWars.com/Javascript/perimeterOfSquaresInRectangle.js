function perimeter(n) {
  let sum = 0;

  for (let i = 1; i <= n + 1; i++) {
    // prettier-ignore
    sum += Math.floor((Math.pow((1 + Math.sqrt(5)) / 2, i) - Math.pow((1 - Math.sqrt(5)) / 2, i)) / Math.sqrt(5))
  }

  return sum * 4;
}

console.log(perimeter(0), 4);
console.log(perimeter(5), 80);
console.log(perimeter(7), 216);
console.log(perimeter(20), 114624);
console.log(perimeter(30), 14098308);
