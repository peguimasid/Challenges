function averagePair(integersArray, targetAvarage){
  let start = 0;
  let end = integersArray.length - 1;

  while(start < end) {
    let avarage = (integersArray[start] + integersArray[end]) / 2

    if(avarage === targetAvarage) return true;
    else if (avarage < targetAvarage) start++;
    else end--;
    
  }
  
  return false;
}

console.log(averagePair([1, 2, 3], 2.5 ))