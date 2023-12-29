function add(n) {
  const sum = (x) => add(n + x);

  sum.valueOf = () => n;

  return sum;
}

console.log(add(1)(2)(3).valueOf()); // == 6
console.log(add(1)(2)(3)(4).valueOf()); //  == 10
console.log(add(1)(2)(3)(4)(5).valueOf()); // == 15
