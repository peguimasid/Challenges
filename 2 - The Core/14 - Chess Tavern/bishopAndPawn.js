const board = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7, 
  "h": 8,
}

function bishopAndPawn(bishop, pawn) {
  const bishopX = board[bishop[0]]
  const bishopY = parseInt(bishop[1])

  const pawnX = board[pawn[0]]
  const pawnY = parseInt(pawn[1])

  if(bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === bishopY + pawnX) return true

  return false
}

console.log(bishopAndPawn('a1', 'c3'))