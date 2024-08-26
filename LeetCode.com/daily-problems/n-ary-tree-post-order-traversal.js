function _Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
function postorder(root) {
  const result = [];

  /**
   * @param {_Node|null} node
   */
  function traverse(node) {
    if (!node) return;

    for (const child of node.children) {
      traverse(child);
    }

    result.push(node.val);
  }

  traverse(root);

  return result;
}

const root1 = new _Node(1, [
  new _Node(2, []),
  new _Node(3, [
    new _Node(6, []),
    new _Node(7, [new _Node(11, [new _Node(14, [])])]),
  ]),
  new _Node(4, [new _Node(8, [new _Node(12, [])])]),
  new _Node(5, [new _Node(9, [new _Node(13, [])]), new _Node(10, [])]),
]);

console.log(postorder(root1));
// [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]
