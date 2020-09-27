function checkPalindrome(inputString) {
  console.log(inputString.split(''))
  return inputString == inputString.split('').reverse().join('');

}



console.log(checkPalindrome('socorrammesubinoonibusemmarrocos'))