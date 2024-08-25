function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
  /**
   * @type {number[]}
   */
  const result = [];

  /**
   * @param {TreeNode} node
   * @return {void}
   */
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  }

  traverse(root);

  return result;
}

const tree1 = new TreeNode(
  1,
  null,
  new TreeNode(2, new TreeNode(3, null, null), null)
);
console.log(postorderTraversal(tree1)); // [3, 2, 1]
const tree2 = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);
console.log(postorderTraversal(tree2)); // [2, 3, 1]
