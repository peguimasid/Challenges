function buildPalindrome(st) {
  
  if (st === st.split('').reverse().join('') ) return st
  
  for (var i = 0; i < st.length; i++) {
    var newStr = st.slice()
    for (var j = i; j >= 0; j--) {
      newStr += st[j]
      var reversed = newStr.split('').reverse().join('')
      if (newStr === reversed) return newStr
      console.log(st[j], newStr, reversed)
    }
    console.log("------")
  }
}


console.log(buildPalindrome('abcdc'))