function findEmailDomain(address) {
  return address.split('@').pop()
}

console.log(findEmailDomain("prettyandsimple@example.com"))