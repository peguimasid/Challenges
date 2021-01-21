function allLongestStrings(array) {
  let result = []

  const longestStringLength = Math.max(...array.map(string => string.length))

  for(let string of array) {
    if(string.length === longestStringLength) result.push(string)
  }

  return result
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))