function nthNumber(s, n) {
  var re = new RegExp("(([1-9]+[0-9]*).*?){"+n+"}");
  return re.exec(s)[1];
}

console.log(nthNumber("8one 003number 201numbers li-000233le number444", 4))