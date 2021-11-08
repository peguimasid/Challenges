function towerBreakers(n, m) {
  return m === 1 || n % 2 === 0 ? 2 : 1;
}

// n = 2 | m = 2
// we have two towers: 2 and 2
// player 1 removes 2 units from tower 1
// now we have: 1 and 2
// player 2 remvoe 1 from tower 2
// now we have: 1 and 1
// player 1 now can do nothing so player 2 wins
