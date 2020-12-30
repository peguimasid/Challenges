function lineUp(commands) {
  let result = 0;
  let sameDirection = true;

  for(let i = 0; i < commands.length; i++) {
    let command = commands[i]
    
    if(command === 'L' || command === 'R') {
      sameDirection = !sameDirection
    }
    if(sameDirection) result++
  }

  return result
}

console.log(lineUp('LLARL'))