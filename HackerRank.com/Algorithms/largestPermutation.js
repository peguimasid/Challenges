function swap(i, j, array) {
  let result = [...array];

  let temp = result[i];
  result[i] = result[j];
  result[j] = temp;

  return result;
}

function largestPermutation(k, arr) {
  let result = arr;

  for (let i = 0; i < k; i++) {
    let largestSwap = result;

    for (let j = 0; j < arr.length; j++) {
      for (let p = j + 1; p < arr.length; p++) {
        const swapped = swap(j, p, result);

        if (Number(swapped.join('')) > Number(largestSwap.join(''))) {
          largestSwap = swapped;
        }
      }
    }

    if (Number(largestSwap.join('')) > Number(result.join(''))) {
      result = largestSwap;
    }
  }

  return result;
}

console.log(largestPermutation(1, [1, 2, 3, 4]));
// console.log(largestPermutation(1, [4, 2, 3, 5, 1]));
// console.log(largestPermutation(1, [2, 1]));

// Para resolvermos esse problema vamos fazer o seguinte

// - Criamos uma variavel result que comeca com o valor da array inicial
// - Para cada unidade de K, nos achamos a maior permutação e setamos result para ser essa permutação
// - no final vamos ter a maior permutação possivel
