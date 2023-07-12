Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) return false;

  if (this.length !== other.length) return false;

  const originalQueue = [];
  const otherQueue = [];

  const traverse = (array, queue) => {
    for (const item of array) {
      const isArray = Array.isArray(item);
      if (!isArray) queue.push('item');
      if (isArray) {
        queue.push('array');
        traverse(item, queue);
      }
    }
  };

  traverse(this, originalQueue);
  traverse(other, otherQueue);

  return originalQueue.join(',') === otherQueue.join(',');
};

// prettier-ignore
console.log(([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ))) // true
// prettier-ignore
console.log(([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ))) // true
// prettier-ignore
console.log(([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ))) // false
// prettier-ignore
console.log(([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ))) // false
// prettier-ignore
console.log(([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ]))) // true
// prettier-ignore
console.log(([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ))) // false
