function differentSquares(a) {

  var s = new Set;
  for( var i=0; i<a.length-1; i++ ) {
      for( var j=0; j<a[0].length-1; j++ ) {
          var hash = a[i][j] + 10*a[i][j+1] + 100*a[i+1][j] + 1000*a[i+1][j+1];
          s.add( hash );
      }
  }
  
  return s.size;
}
