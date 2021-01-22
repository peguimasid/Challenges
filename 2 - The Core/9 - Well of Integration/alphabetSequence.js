function alphabetSubsequence(s) {
  let result = true

  let alpabhet = Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
  s = s.split('')
  let lastIndex = 0
  

  for(let i = 0; i < s.length; i++) {
    const start = i === 0 && alpabhet.indexOf(s[i]) === 0
    if(alpabhet.indexOf(s[i]) <= lastIndex && !start) return false
    lastIndex = alpabhet.indexOf(s[i])
  }

  return result
}

console.log(alphabetSubsequence('ace'))