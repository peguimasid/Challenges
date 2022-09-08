function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
  if (!root) return [];

  let result = [];
  const traverse = (node) => {
    if (node?.left) traverse(node.left);
    result.push(node.val);
    if (node?.right) traverse(node.right);
  };

  traverse(root);

  return result;
};

const bt = new TreeNode(1);
bt.right = new TreeNode(2);
bt.right.left = new TreeNode(3);

console.log(inorderTraversal(bt));
