function separateNumbers(string) {
  let start = 0;
  for (let i = 1; i <= Math.floor(string.length / 2); i++) {
    let str = [...string].slice(0, i).join('');
    start = str;
    let num = BigInt(str);

    while (str.length < string.length) {
      str += (num + 1n).toString(10);
      num++;
    }

    if (string === str) {
      console.log(`YES ${start}`);
      return `YES ${start}`;
    }
  }
  console.log('NO');
  return 'NO';
}

// console.log(separateNumbers('99100'));
// console.log(separateNumbers('91011'));
console.log(separateNumbers('1234'));

// 1 - a[i] - a[i - 1] = 1 (cada elemento na sequencia tem que ser 1 numero maior que o seu anterior)
// 2 - a[i] não pode conter zeros a esquerda (ex: 10203, pode dividir em [1, 02, 03])
// 3 - Não podemos rearranjar os elementos da sequencia (ex: 312)
