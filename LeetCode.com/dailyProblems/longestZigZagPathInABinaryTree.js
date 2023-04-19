function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestZigZag = (root) => {
  let result = 0;

  const traverse = (node, direction = 0) => {
    if (!node) return -1;
    const left = 1 + traverse(node.left, 0);
    const right = 1 + traverse(node.right, 1);
    result = Math.max(result, left, right);
    return direction === 0 ? right : left;
  };

  const left = 1 + traverse(root.left, 0);
  const right = 1 + traverse(root.right, 1);
  result = Math.max(result, left, right);

  return result;
};

const bt = new TreeNode(1);
bt.right = new TreeNode(1);
bt.right.left = new TreeNode(1);
bt.right.right = new TreeNode(1);
bt.right.right.left = new TreeNode(1);
bt.right.right.right = new TreeNode(1);
bt.right.right.left.right = new TreeNode(1);
bt.right.right.left.right.right = new TreeNode(1);

console.log(longestZigZag(bt));
