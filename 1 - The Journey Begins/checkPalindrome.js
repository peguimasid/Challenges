function checkPalindrome(string) {
  for(let i = 0; i < string.length / 2; i++) {
// enquanto i for menor que a metade da string vamos aumentando ele

    if(string[i] !== string[string.length - 1 - i]) {
      // comecamos no comeco da string e aumentando / pegamos la do final da string e diminuindo
      // se em algum momento for diferente ele retorna false

      return false;
    }
  }
  return true;
}

//outras soluções

function checkPalindrome(inputString) {
  return inputString == inputString.split('').reverse().join('');
}



console.log(checkPalindrome('socorrammesubinoonibusemmarrocos'))