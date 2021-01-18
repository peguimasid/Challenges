function stringsConstruction(a, b) {
  let result = 0;

  while(true){
    
    for(let x of a){
      if(b.indexOf(x) < 0)
        return result;
        b = b.replace(x,"");    
      }

    result++;
  }

}

console.log(stringsConstruction('ab', 'abcbcbc'))
console.log(stringsConstruction('abc', 'abccba'))