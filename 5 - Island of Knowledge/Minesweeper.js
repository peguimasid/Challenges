var matrix = [[true, false, false],
[false, true, false],
[false, false, false]]

function minesweeper(matrix) {
  let mineCount = [];

  for(let i = 0; i < matrix.length; i++) {
    mineCount.push([]);
    for(let j = 0; j < matrix[i].length; j++) {
      mineCount[i][j] = 0;
      // cima
      if(matrix[i][j - 1] === true) {
        mineCount[i][j]++;
      }
      // baixo
      if(matrix[i][j + 1] != undefined && matrix[i][j + 1] === true) {
        mineCount[i][j]++;
      }
      //esquerda
      if(matrix[i - 1] != undefined && matrix[i - 1][j] === true) {
        mineCount[i][j]++;
      }
      // direita
      if(matrix[i + 1] != undefined && matrix[i + 1][j] === true) {
        mineCount[i][j]++;
      }
      // diagonal baixo direita
      if(matrix[i + 1] != undefined && matrix[i + 1][j + 1] === true) {
        mineCount[i][j]++;
      }
      // diagonal baixo esquerda
      if(matrix[i + 1] != undefined && matrix[i + 1][j - 1] === true) {
        mineCount[i][j]++;
      }
      // diagonal cima direita
      if(matrix[i - 1] != undefined && matrix[i - 1][j + 1] === true) {
        mineCount[i][j]++;
      }
      // diagonal cima esquerda
      if(matrix[i - 1] != undefined && matrix[i - 1][j - 1] === true) {
        mineCount[i][j]++;
      }
    }
  }

return mineCount;
}

console.log(minesweeper(matrix));