const gameOfStones = (n) => (n % 7 <= 1 ? 'Second' : 'First');

console.log(gameOfStones(1));
console.log(gameOfStones(2));
console.log(gameOfStones(3));
console.log(gameOfStones(4));
console.log(gameOfStones(5));
console.log(gameOfStones(6));
console.log(gameOfStones(7));
console.log(gameOfStones(10));
