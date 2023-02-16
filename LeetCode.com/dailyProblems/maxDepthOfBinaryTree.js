function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  let result = 0;

  const traverse = (node, level = 1) => {
    result = Math.max(result, level);
    if (node?.left) traverse(node.left, level + 1);
    if (node?.right) traverse(node.right, level + 1);
  };
  if (root) traverse(root);

  return result;
};

const bt = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(maxDepth(bt));
