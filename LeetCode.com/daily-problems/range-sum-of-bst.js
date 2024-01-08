function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
  let result = 0;

  function traverse(node) {
    if (node.val >= low && node.val <= high) result += node.val;
    if (node?.left) traverse(node.left);
    if (node?.right) traverse(node.right);
  }

  if (root) traverse(root);

  return result;
}

const tree = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3), new TreeNode(7)),
  new TreeNode(15, null, new TreeNode(18))
);

console.log(rangeSumBST(tree, 7, 15)); // 32
