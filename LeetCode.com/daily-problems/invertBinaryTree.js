function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  const invert = (node) => {
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    if (node?.left) invert(node.left);
    if (node?.right) invert(node.right);
  };

  if (root) invert(root);

  return root;
};

const bt = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

console.log(invertTree(bt));
