function simple_assembler(program) {
  var reg = {};

  var regOrValue = (n) => (n.match(/[a-z]/) ? reg[n] : +n);

  var ops = {
    mov: (a, b) => {
      reg[a] = regOrValue(b);
      return 1;
    },
    inc: (a, b) => {
      reg[a]++;
      return 1;
    },
    dec: (a, b) => {
      reg[a]--;
      return 1;
    },
    jnz: (a, b) => {
      return regOrValue(a) != 0 ? +b : 1;
    },
  };

  var ip = 0;
  while (ip < program.length) {
    var [op, a, b] = program[ip].split(' ');
    ip += ops[op](a, b);
  }

  return reg;
}

console.log(
  simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a'])
);

// mov
// inc
// dec
// jnz
