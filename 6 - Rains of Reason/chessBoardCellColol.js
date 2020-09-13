const board = {
  "A": 1,
  "B": 2,
  "C": 3,
  "D": 4,
  "E": 5,
  "F": 6,
  "G": 7,
  "H": 8,
}

function chessBoardCellColor(cell1, cell2) {
  const totalOne = board[cell1[0]] + Number(cell1[1]);
  const totalTwo = board[cell2[0]] + Number(cell2[1]);

  return totalOne % 2 === totalTwo % 2;
}

console.log(chessBoardCellColor('A1', 'C3'))