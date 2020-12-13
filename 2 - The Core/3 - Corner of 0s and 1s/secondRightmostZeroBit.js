function secondRightmostZeroBit(n) {
  return (function(input) {
    var result = 0;
    var zeroFound = false;
    
    for (var i = 0; i < 32; i++) {
      if (!((input >> i) & 1)) {
        if (zeroFound) {
          result = i;
          break;
        }
        
        zeroFound = true;
      }
    }
    
    return Math.pow(2, result);
  })(n) ;
}
