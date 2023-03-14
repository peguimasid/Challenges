function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = (root) => {
  let result = 0;

  const traverse = (node, num = '') => {
    console.log(node, num);
    if (!node.left && !node.right) result += Number(num);
    if (node.left) traverse(node.left, num + node.left.val);
    if (node.right) traverse(node.right, num + node.right.val);
  };

  if (root) traverse(root, String(root.val));

  return result;
};

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(sumNumbers(tree));
