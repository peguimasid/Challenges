// SOLUCAO CORRETA MAS O PROBLEMA QUER COM O(n) MENOR
// function strangeCounter(t) {
//   let initialValue = 3;
//   let curr = 3;

//   for (let time = 1; time <= t; time++) {
//     if (time === t) {
//       return curr;
//     }

//     if (curr === 1) {
//       curr = initialValue * 2;
//       initialValue *= 2;
//     } else {
//       curr--;
//     }
//   }
// }

function strangeCounter(t) {
  let rem = 3;
  while (t > rem) {
    console.log(rem - t);
    t = t - rem;
    rem *= 2;
  }
  return rem - t + 1;
}

console.log(strangeCounter(1000000000000));
