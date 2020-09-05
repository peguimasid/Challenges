function areSimilar(arrayOne, arrayTwo) {
  if(arrayOne.toString() == arrayTwo.toString()) {
    return true;
  }

  let arrayThree = [];
  let arrayFour = [];

  for(let i = 0; i < arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]) {
      arrayThree.push(arrayOne[i]);
      arrayFour.push(arrayTwo[i]);
    }
  }

  arrayFour = arrayFour.reverse();

  if(arrayThree.length === 2 && (arrayThree.toString() === arrayFour.toString())) {
    return true;
  }

  return false;
}

// NAO CONSEGUI, SOLUCAO COPIADA DA INTERNET

console.log(areSimilar([1, 2, 3], [2, 1, 3]))