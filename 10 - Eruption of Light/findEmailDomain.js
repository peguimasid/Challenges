function findEmailDomain(address) {
  return address.split('@').pop();
}

console.log(findEmailDomain("\"very.unusual.@.unusual.com\"@usual.com"))