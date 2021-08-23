const sw = (a, sorted) => {
  const map = new Map();
  a.forEach((currentVal, index) => map.set(currentVal, index));

  return a.reduce((swaps, currentVal, index) => {
    if (currentVal !== sorted[index]) {
      const j = map.get(sorted[index]);
      (a[j] = currentVal), map.set(currentVal, j), swaps++;
    }
    return swaps;
  }, 0);
};

function lilysHomework(arr) {
  const sorted = arr.slice().sort((x, y) => x - y);
  return Math.min(sw(arr.slice(), sorted), sw(arr.reverse(), sorted));
}

console.log(lilysHomework([3, 4, 2, 5, 1]));
