function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
  if (!node) return null;

  const map = {};
  const clone = ({ val, neighbors }) => {
    if (!map[val]) {
      map[val] = new Node(val);
      map[val].neighbors = neighbors.map(clone);
    }
    return map[val];
  };
  return clone(node);
};

const graph = new Node(1, [
  new Node(2, [new Node(3)]),
  new Node(4, [new Node(3)]),
]);
console.log(cloneGraph(graph));
