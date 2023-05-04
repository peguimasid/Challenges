/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = (senate) => {
  const radiant = [];
  const dire = [];
  const n = senate.length;

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') radiant.push(i + n);
    if (senate[i] === 'D') dire.push(i + n);
  }

  while (radiant.length && dire.length) {
    if (radiant[0] < dire[0]) radiant.push(radiant[0] + n);
    else dire.push(dire[0] + n);
    radiant.shift();
    dire.shift();
  }

  return radiant.length ? 'Radiant' : 'Dire';
};

console.log(predictPartyVictory('RD')); // Radiant
console.log(predictPartyVictory('RDD')); // Dire
