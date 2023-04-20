function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = (root) => {
  let result = 0;

  const minPos = [0];

  const traverse = (node, level = 0, pos = 0) => {
    if (!node) return;
    if (!minPos[level]) minPos.push(pos);
    const diff = pos - minPos[level];
    result = Math.max(result, diff + 1);
    traverse(node.left, level + 1, diff * 2);
    traverse(node.right, level + 1, diff * 2 + 1);
  };

  traverse(root);

  return result;
};

const bt = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5), new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(9))
);

console.log(widthOfBinaryTree(bt));
