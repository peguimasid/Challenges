/**
 * @param {number[]} deck
 * @return {number[]}
 */
function deckRevealedIncreasing(deck) {
  deck.sort((a, b) => a - b);

  const revealed = [];
  revealed.unshift(deck[deck.length - 1]);
  for (let i = deck.length - 2; i >= 0; i--) {
    revealed.unshift(revealed.pop());
    revealed.unshift(deck[i]);
  }

  return revealed;
}

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])); //[2,13,3,11,5,17,7]
