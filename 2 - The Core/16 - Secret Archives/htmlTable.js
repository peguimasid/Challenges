function htmlTable(table, row, column) {
  let t = table.split('<tr>')[1 + row] || 'No such cell'
  t = t.split('<td>')[1 + column] || 'No such cell'
  t = t.split('</td>')[0] || 'No such cell'
  return t
}

let table = "<table><tr><td>1</td><td>TWO</td></tr></table>"

console.log(htmlTable(table, 1, 0))