function areThereDuplicates(...args) {
  let first = 0;
  let second = 1;

  args.sort((a, b) => a > b);

  while(second < args.length) {
    let isEqual = args[first] === args[second];

    if(isEqual) {
      return true;
    }
    first++
    second++
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 2))