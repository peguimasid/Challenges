function divisors(integer) {
  let result = [];

  let i = 2;
  while (i < integer) {
    if (integer % i === 0) result.push(i);
    i++;
  }

  return result.length ? result : `${integer} is prime`;
}

console.log(divisors(15)); // [3, 5]
console.log(divisors(12)); // [2, 3, 4, 6]
console.log(divisors(13)); // "13 is prime"
