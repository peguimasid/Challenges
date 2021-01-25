function invertArrayValues(array, index = array.length - 1) {
  for(let i = 0; i <= index; i++) {
    array[i] === 0 ? array[i] = 1 : array[i] = 0
  }
}

function isLit(number) {
  return number === 1
}

function switchLights(array) {
  for(let i = 0; i < array.length; i++) {
    currentNumber = array[i]
    if(isLit(currentNumber)) {
      invertArrayValues(array, i)
    }
  }

  return array
}

console.log(switchLights([1, 1, 1, 1, 1]))