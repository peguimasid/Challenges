function narcissistic(value) {
  const string = String(value);

  const calc = string.split('').reduce((acc, curr) => {
    acc += Math.pow(Number(curr), string.length);
    return acc;
  }, 0);

  return calc === value;
}

console.log(narcissistic(7));
console.log(narcissistic(153));
console.log(narcissistic(122));
console.log(narcissistic(487));
