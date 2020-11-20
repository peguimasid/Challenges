function multiplyAllArrayNumbers(array) {
  let result = 0;
  
  for(let i = 0; i < array.length; i++) {
    if(i === 0){
      result = array[i];
    } else {
      result = result * array[i];
    }
  }

  return result;
}

function digitsProduct(product) {
  if(product.toString().length === 1 && product !== 0) {
    return product
  }

  for (let i = 0; i < 100000; i++) {
    const indexToArray = i.toString().split('')

    if(multiplyAllArrayNumbers(indexToArray) === product) {
      return Number(indexToArray.join(''));
    }
  }

  return -1
}