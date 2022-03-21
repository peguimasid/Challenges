function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function waveSort(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i += 2) swap(i, i + 1, arr);
}

let arr = [1, 4, 5, 3];

waveSort(arr);

console.log(arr);
