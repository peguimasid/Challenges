function properNounCorrection(noun) {
  const uppercasePart = noun[0].toUpperCase()
  const lowcasePart = noun.substr(1).toLowerCase()

  return `${uppercasePart}${lowcasePart}`
}

console.log(properNounCorrection('pARIS'))