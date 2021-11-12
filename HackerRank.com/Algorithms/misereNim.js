function misereNim(stones) {
  const firstPlayerWins = 'First';
  const secondPlayerWins = 'Second';

  if (stones.length === 1)
    return stones[0] > 1 ? firstPlayerWins : secondPlayerWins;

  let totalStones = 0;
  let xorStonesValues = 0;

  for (const stone of stones) {
    totalStones += stone;
    xorStonesValues ^= stone;
  }

  if (totalStones === stones.length) {
    return totalStones % 2 === 0 ? firstPlayerWins : secondPlayerWins;
  }

  return xorStonesValues > 0 ? firstPlayerWins : secondPlayerWins;
}

console.log(misereNim([1, 1, 1])); // second // 3 impares = 3 impares
console.log(misereNim([2, 1, 3])); // second // 2 impares 1 par = 1 impar

console.log(misereNim([1, 2, 2])); // first // 1 impar 2 pares = -1 impar
console.log(misereNim([1, 1])); // first // 2 impares = 2 impares
