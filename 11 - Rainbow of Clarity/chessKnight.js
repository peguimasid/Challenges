function chessKnight(cell) {
  const chessBoard = [
         [2,3,4,4,4,4,3,2],
         [3,4,6,6,6,6,4,3],
         [4,6,8,8,8,8,6,4],
         [4,6,8,8,8,8,6,4],
         [4,6,8,8,8,8,6,4],
         [4,6,8,8,8,8,6,4],
         [3,4,6,6,6,6,4,3],
         [2,3,4,4,4,4,3,2],
     ]
     
     const x = cell[0].charCodeAt() - 97;
     console.log(x)
     return chessBoard[cell[1] - 1][x]
 }

 // Pulei esse
 