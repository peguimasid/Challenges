// Not funny solution
function removeArrayPart(array, l, r) {  
  array.splice(l, (r - l) + 1)
  return array
}

// Funny
function removeArrayPart(array, l, r) {  
  let result = []

  for(let i = 0; i < array.length; i++) {
   i < l || i > r ? result.push(array[i]) : null
  }

  return result
}



console.log(removeArrayPart([2, 3, 2, 3, 4, 5], 2, 4))