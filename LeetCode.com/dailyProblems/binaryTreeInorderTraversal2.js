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
  if (!root) return [];

  return [
    ...inorderTraversal(root?.left),
    root.val,
    ...inorderTraversal(root?.right),
  ];
}

const tree = new TreeNode(
  1,
  null,
  new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(inorderTraversal(tree));
