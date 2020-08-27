function sortByHeight(array) {
  let arraySortedByHeight = [];
  let treesIndex = [];
  let numbersWithoutTress = [];
  
  for(let i = 0; i < array.length; i++) {
    const isTree = array[i] === -1

    if(isTree) {
      treesIndex.push(i);
    } else {
      numbersWithoutTress.push(array[i])
    }
  }

  numbersWithoutTreesSorted = numbersWithoutTress.sort((a, b) => a - b);

  for(let i = 0; i < treesIndex.length; i++) {
    numbersWithoutTreesSorted.splice(treesIndex[i], 0, -1)
  }

  arraySortedByHeight = numbersWithoutTreesSorted;

  return arraySortedByHeight;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))