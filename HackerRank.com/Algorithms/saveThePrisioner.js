function saveThePrisoner(n, m, s) {
  return (m - 1 + s) % n || n;
}

console.log(saveThePrisoner(3, 7, 3))