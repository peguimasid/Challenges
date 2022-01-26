const divisibleByFive = /^(0|1(10)*(0|11)(01*01|01*00(10)*(0|11))*1)+$/; // partial solution

console.log(divisibleByFive.test(''));
console.log(divisibleByFive.test('101'));
console.log(divisibleByFive.test('10000111'));
console.log(divisibleByFive.test('0000001010011010'));
