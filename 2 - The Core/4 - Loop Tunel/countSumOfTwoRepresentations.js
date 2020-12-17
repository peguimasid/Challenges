function countSumOfTwoRepresentations2(n, l, r) {
  var result = 0;
  
  for (var l; l <= r; l++) {
    if (l <= (n - l) && r >= (n - l)) result++;
  }
  
  return result;
}

console.log(countSumOfTwoRepresentations2(93, 24, 58))