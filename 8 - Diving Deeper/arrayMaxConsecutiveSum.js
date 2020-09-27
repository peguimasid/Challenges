function arrayMaxConsecutiveSum(array, k) {
  let maxSum = 0;
  let tempSum = 0;

  if(array.length < k) return null;

  // somamos os tres primeiros numeros e guardamos em maxSum
  for(let i = 0; i < k; i++) {
    maxSum += array[i]
  }

  tempSum = maxSum;

  // fazemos um loop dessa vez comecando em "k" pois ja temos a soma dos "k" primeiros numeros
  for(let i = k; i < array.length; i++) {
    // diminuimos o anterior e adicionamos o posterior 
    tempSum = tempSum - array[i - k] + array[i];
    // verificamos qualé maior entre a soma atual e a que temos armazenada
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))