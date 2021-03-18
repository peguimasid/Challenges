function alternatingSums(array) {
  let teamOne = 0;
  let teamTwo = 0;

  for(let i = 0; i < array.length; i++) {
    i % 2 === 0 ? teamOne += array[i] : teamTwo += array[i]
  }

  return [teamOne, teamTwo]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))