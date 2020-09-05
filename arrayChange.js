function arrayChange(array) {
  let moves = 0;

  for(var i = 0; i < array.length; i++) {
    // se nosso item atual for maior que o item na frente dele
    if(array[i] >= array[i + 1]) {
      // diferenca entre nosso item atual + 1 e o item na frente dele
      let difference = array[i] + 1 - array[i + 1];
      array[i + 1] = array[i] + 1;
      moves += difference;
    }
  }

  return moves;
}

// NAO CONSEGUI, SOLUCAO COPIADA DA INTERNET

console.log(arrayChange([1, 1, 1]))