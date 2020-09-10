function isIPv4Address(string) {
  if(adressObeyToIpv4Rules(string)) return true;
    return false;
}

function adressObeyToIpv4Rules(string) {
 return /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(string);
 // WTF?? Dei um stack overflow e achei esse regex
}

console.log(isIPv4Address("172.316.254.1"))