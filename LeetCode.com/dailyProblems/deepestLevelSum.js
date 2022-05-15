class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const deepestLevelNum = (root) => {
  let result = 1;

  const helper = (node, level = 1) => {
    if (level > result) result = level;
    if (node.left) helper(node.left, level + 1);
    if (node.right) helper(node.right, level + 1);
  };

  helper(root);

  return result;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const deepestLeavesSum = (root) => {
  const deepestLevel = deepestLevelNum(root);

  let result = 0;

  const helper = (node, level = 1) => {
    if (level === deepestLevel) result += node.val;
    if (node.left) helper(node.left, level + 1);
    if (node.right) helper(node.right, level + 1);
  };

  helper(root);

  return result;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(7);

root.right.right = new TreeNode(6);
root.right.right.right = new TreeNode(8);

console.log(deepestLeavesSum(root));
