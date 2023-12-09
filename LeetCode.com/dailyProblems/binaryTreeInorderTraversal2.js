function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const accumulate = (node) => {
    if (!node) return [];
    return [...accumulate(node?.left), node.val, ...accumulate(node?.right)];
  };

  return accumulate(root);
}

const tree = new TreeNode(
  1,
  null,
  new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(inorderTraversal(tree));
