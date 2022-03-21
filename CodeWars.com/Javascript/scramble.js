function scramble(str1, str2) {
  let frequencyCounter = {}

  for (let char of str2) {
    frequencyCounter[char] ? frequencyCounter[char]++ : frequencyCounter[char] = 1
  }

  for (let char of str1) {
    if (frequencyCounter[char] && frequencyCounter[char] !== 0) frequencyCounter[char]--
  }

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] !== 0) return false
  }

  return true
}

console.log(scramble("cdeusardhmdhdn", "merda"))