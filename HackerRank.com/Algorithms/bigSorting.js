function bigSorting(unsorted) {
  unsorted.sort(function (a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length === b.length) {
      var aChars = a.split('');
      var bChars = b.split('');

      for (var iter = 0; iter < a.length && iter < b.length; iter++) {
        var currentANum = parseInt(aChars[iter]);
        var currentBNum = parseInt(bChars[iter]);

        if (currentANum > currentBNum) {
          return 1;
        }
        if (currentANum < currentBNum) {
          return -1;
        }
      }

      return 0;
    } else {
      return -1;
    }
  });

  return unsorted;
}

console.log(bigSorting(['1', '200', '150', '3']));
