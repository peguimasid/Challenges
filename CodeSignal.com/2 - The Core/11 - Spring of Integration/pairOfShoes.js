function pairOfShoes(shoes) {
  let pairs = {};

  for(let shoe of shoes){
      if(!pairs[shoe[1]]) pairs[shoe[1]] = 0;
      shoe[0] ? pairs[shoe[1]]++ : pairs[shoe[1]]--
  }

  return Object.values(pairs).every(e => e === 0);
  
}

let shoes = 
[[0,21], 
 [1,23], 
 [1,21], 
 [1,23]]

console.log(pairOfShoes(shoes))