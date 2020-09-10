function firstNotRepeatingCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    // verificando qual charactere está naquela posição "i" cada vez que passa no loop
    var char = string.charAt(i);
    // se esse caractere estiver na string setamos ele pra ser
    if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
    // se o index do caractere que estamos no momento for igual ao index ("i") no loop
    // E 
    // se o caractere que estamos procurando não existe na frente dele não precisamos nos preocupar com o "d" pois ele
    // retorna o primeiro que ele encontra que nao exista a frente dele
      return char;
    }
  }
  return "_";
}

console.log(firstNotRepeatingCharacter("abacabad", 0));

// OTHERS SOLUTIONS

function firstNotRepeatingCharacter(a) {
  for (var i = 0; i < a.length; i++) {

      if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
          return a[i];
      }
  }
  return '_';
}
//////////////////////////////////////////////////////////////
function firstNotRepeatingCharacter(s) {
    
  var arr = s.split("");
  
  for(var i = 0; i < arr.length; i++){
      var chr = arr[i];
      if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
          return arr[i]
      }
      
  }
  
  return "_"
}