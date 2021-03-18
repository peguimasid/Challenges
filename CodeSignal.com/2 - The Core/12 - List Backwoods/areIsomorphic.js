// Problema, verificar se duas array são isomorficas, uma array é considerada isomorfica
// se elas tiverem o mesmo numero de linhas e cada par dessas linhas tem que ter o mesmo 
// numero de elementos dentro dela


function areIsomorphic(array1, array2) {
  if(array1.length !== array2.length) return false

  let result = true
  
  for(let i = 0; i < array1.length; i++) {
    if(result === false) return result
    if(array1[i].length !== array2[i].length) result = false
  }

  return result
}

let array1 =
[[1, 1, 1],
[0, 0]] 

let array2 = [[2, 1, 1],
[2, 1]]

console.log(areIsomorphic(array1, array2))