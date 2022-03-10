const sequence = (x) => Array.from({ length: x }, (_, i) => i + 1).sort();

console.log(sequence(50));
