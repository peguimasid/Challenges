function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function evaluateTree(root) {
  /**
   * @param {TreeNode} node
   * @return {boolean}
   */
  function postOrder(node) {
    if (node.val === 1) return true;
    if (node.val === 0) return false;
    if (node.val === 3) return postOrder(node.left) && postOrder(node.right);
    if (node.val === 2) return postOrder(node.left) || postOrder(node.right);
  }

  return postOrder(root);
}

const tree = new TreeNode(2);
tree.left = new TreeNode(1);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(0);
tree.right.right = new TreeNode(1);

console.log(evaluateTree(tree)); // true

const tree1 = new TreeNode(0);
console.log(evaluateTree(tree1)); // false
