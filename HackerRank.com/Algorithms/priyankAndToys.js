function toys(weights) {
  weights.sort((a, b) => a - b);

  let result = 0;

  let start = weights[0];

  for (let i = 1; i < weights.length; i++) {
    const currentWeight = weights[i];

    if (Math.abs(currentWeight - start) > 4) {
      start = currentWeight;
      result++;
    }
  }

  return result + 1;
}

// tods os items do container devem pesar menor que ou igual a 4 unidades do menor item
// tods os items que tiverem essas condições atendidas, podem ser enviados em um container

console.log(toys([1, 2, 3, 4, 5, 10, 11, 12, 13]));
console.log(toys([1, 2, 3, 21, 7, 12, 14, 21]));
