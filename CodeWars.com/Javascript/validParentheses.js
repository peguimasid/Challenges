function validParentheses(parens) {
  let result = 0

  for (let p of parens) {
    if (p === '(') result++
    if (p === ')') result--
    if (result < 0) return false
  }

  return result === 0
}