function isCaseInsensitivePalindrome(inputString) {
  inputString = inputString.toLowerCase()

  return inputString === inputString.split('').reverse().join('')
}

console.log(isCaseInsensitivePalindrome("AaBaa"))