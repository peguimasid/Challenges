function createAnagram(s, t) {
  for(let char of s){
    t = t.replace(char,""); 
    console.log(t)   
  }
  return t.length;
}

console.log(createAnagram('OVGHK', 'RPGUC'))