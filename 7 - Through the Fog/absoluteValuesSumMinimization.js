function absoluteValuesSumMinimization(array) {
  let smallestSum = Number.POSITIVE_INFINITY;
  let x = [];

  for(let i = 0; i < array.length; i++) {
    let actualSum = 0;

    for(let j = 0; j < array.length; j++) {
      actualSum += Math.abs(array[i] - array[j])
    }

    if(actualSum < smallestSum){
       smallestSum = actualSum;
       x = [];
       x.push(array[i]);
    }

    if(actualSum === smallestSum){
       smallestSum = actualSum;
       x.push(array[i]);
    }
  }

  return Math.min(...x);
}

console.log(absoluteValuesSumMinimization([2, 4, 7]))