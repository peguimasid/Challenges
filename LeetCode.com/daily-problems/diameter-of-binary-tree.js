function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  let result = 0;

  function traverse(node) {
    if (!node) return 0;

    const left = traverse(node.left);
    const right = traverse(node.right);

    result = Math.max(result, left + right);

    return Math.max(left, right) + 1;
  }

  traverse(root);

  return result;
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(diameterOfBinaryTree(tree)); // 3

// const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// console.log(diameterOfBinaryTree(tree2)); // 2
