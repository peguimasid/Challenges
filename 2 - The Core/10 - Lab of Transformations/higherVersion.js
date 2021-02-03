function higherVersion(ver1, ver2) {
  ver1 = ver1.split('.')
  ver2 = ver2.split('.')

  for(let i = 0; i < ver1.length; i++) {
    if(Number(ver1[i]) > Number(ver2[i])) return true
    if(Number(ver1[i]) < Number(ver2[i])) return false
  }

  return false
}

console.log(higherVersion('1.10.2','1.2.10'))