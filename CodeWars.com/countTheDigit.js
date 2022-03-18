function nbDig(n, d) {
  let result = 0;

  for (let i = 0; i ** 2 <= n ** 2; i++) {
    result += String(i ** 2)
      .split('')
      .filter((i) => i === String(d)).length;
  }

  return result;
}

console.log(nbDig(10, 1)); // 4

console.log(nbDig(5750, 0)); // 4700
console.log(nbDig(11011, 2)); // 9481
console.log(nbDig(12224, 8)); // 7733
console.log(nbDig(11549, 1)); // 11905
