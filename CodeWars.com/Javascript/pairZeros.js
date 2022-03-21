function pairZeros(arr) {
  let foundZeros = 0;

  return arr.filter((num) => num !== 0 || !(foundZeros++ % 2));
}

console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0])); // [1,0,1,2,0,3,0]
console.log(pairZeros([0, 0, 0, 0, 0, 0, 0, 0])); // [1,0,1,2,0,3,0]
