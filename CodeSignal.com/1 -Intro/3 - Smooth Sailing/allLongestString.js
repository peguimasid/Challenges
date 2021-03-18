// SOLUCAO DO PEDRO
// function allLongestStrings(inputArray) {
//   let biggerStringLength = 0;
//   inputArray.forEach(input => 
//     input.length > biggerStringLength ? biggerStringLength = input.length : null
//   );
//   return inputArray.filter(input => input.length >= biggerStringLength);
// }

// MINHA SOLUCAO
function allLongestStrings(inputArray) {
  let BiggerItemsInArray = [];
  let graderLength = 0;

  for(let i = 0; i < inputArray.length; i++) {
    if(inputArray[i].length > graderLength) {
      graderLength = inputArray[i].length;
    }
  }

  inputArray.forEach(item => {
    if(item.length == graderLength) {
      BiggerItemsInArray.push(item);
    }
  })

  return BiggerItemsInArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));