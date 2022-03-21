function describeTheShape(angles) {
  if (angles <= 2) return 'this will be a line segment or a dot';

  const angle = Math.floor(((angles - 2) * 180) / angles);

  return `This shape has ${angles} sides and each angle measures ${angle}`;
}

console.log(describeTheShape(6)); // "This shape has 6 sides and each angle measures 120"
console.log(describeTheShape(3)); // "This shape has 3 sides and each angle measures 60"
console.log(describeTheShape(8)); // "This shape has 8 sides and each angle measures 135"
console.log(describeTheShape(90)); // "This shape has 90 sides and each angle measures 176"
console.log(describeTheShape(2)); // "this will be a line segment or a dot"
console.log(describeTheShape(1)); // "this will be a line segment or a dot"
