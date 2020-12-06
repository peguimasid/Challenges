function willYou(young, beautiful, loved) {
  function isYoungAndBeautifulButNotLoved() {
    return young === true && beautiful === true && loved === false
  }

  function isLovedButNotYoungOrBeutifoul() {
    return loved === true && (young === false || beautiful === false)
  }

  function contratictsMary() {
    if(isYoungAndBeautifulButNotLoved()) return true
    if(isLovedButNotYoungOrBeutifoul()) return true
       
    return false
  }

  if(contratictsMary()) return true

  return false
}