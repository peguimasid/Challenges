// Não faco a minima ideia do ue está acontecendo aqui.

function isNext(string1,string2){
  var diff=0;
  for(var i=0;i<string1.length;i++){
      if(string1[i]!=string2[i])
          diff++;
  }
  if (diff!=1)
      return false;
  else
      return true;
}

function arranged(array){
  var chars=true;
  for(var i=0;i+1<array.length&&chars;i++){
      if(!isNext(array[i],array[i+1]))
          chars=false;
  }
  return chars;
}

function findNext(string,array){
  var index=-1;
  for(var i=0;i<array.length&&index==-1;i++){
      if(isNext(string,array[i]))
          index=i;
  }
  return index;
}

function stringsRearrangement(inputArray) {
  var next=0;
  inputArray.sort();
  for(var i=0;i<inputArray.length&&next>=0&&!arranged(inputArray);i++){
      next=findNext(inputArray[i],inputArray);
      if(next>=0&&(next>i+1||next<i-1)){
          inputArray.splice(i+1,0,inputArray[next])
          if(next<i+1)
              inputArray.splice(next,1);
          else
              inputArray.splice(next+1,1);
      }
  }
  return arranged(inputArray);
}