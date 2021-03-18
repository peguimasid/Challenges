function pagesNumberingWithInk(current, numberOfDigits) {
  
  while(numberOfDigits) {
    const currentPageLength = current.toString().length
    
    if(numberOfDigits < currentPageLength) break

    numberOfDigits -= currentPageLength

    current++
  }

  return current - 1
}

console.log(pagesNumberingWithInk(21, 5))