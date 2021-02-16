function maximumSum(a, q) {
  a.sort((b, c) => b - c);    
  let counts = new Array(a.length).fill(0);
      
  for (let tuple of q) {
    for (let i = tuple[0]; i <= tuple[1]; i++) {
      counts[i]++;
    }
  }
  
  counts.sort((b, c) => b - c);
  
  return a.reduce((sum, x, i) => {
    return sum + x * counts[i]
  }, 0);

}

console.log(maximumSum([9, 7, 2, 4, 4], [[1, 3], [1, 4], [0, 2]]))