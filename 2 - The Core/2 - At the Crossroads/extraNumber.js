function extraNumber(a, b, c) {
    let frequencyCounter = {}

    frequencyCounter[a] ? frequencyCounter[a]++ : frequencyCounter[a] = 1
    frequencyCounter[b] ? frequencyCounter[b]++ : frequencyCounter[b] = 1
    frequencyCounter[c] ? frequencyCounter[c]++ : frequencyCounter[c] = 1

    for(let key in frequencyCounter) {
      if(frequencyCounter[key] === 1) {
        return Number(key)
      }
    }
}

console.log(extraNumber(10, 30, 10))