function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
  if (!root) return [];

  const result = [];

  const traverse = (node) => {
    result.push(node.val);
    if (node?.left) traverse(node.left);
    if (node?.right) traverse(node.right);
  };

  traverse(root);

  return result;
};

const bt = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(preorderTraversal(bt)); // result = [1,2,3]

const bt2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(5, new TreeNode(6), new TreeNode(7))
);
console.log(preorderTraversal(bt2)); // result = [1,2,3,4,5,6,7]
