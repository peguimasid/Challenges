function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const bstToArray = (root) => {
  let result = [];

  const traverse = (node) => {
    result.push(node.val);
    if (node.right) traverse(node.right);
    if (node.left) traverse(node.left);
  };

  if (root) traverse(root);

  return result;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
  const toArray = bstToArray(root);

  toArray.sort((a, b) => a - b);

  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < toArray.length; i++) {
    const current = toArray[i];
    const previous = toArray[i - 1];

    if (current - previous < result) result = current - previous;
  }

  return result;
};

// prettier-ignore
const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6));
console.log(getMinimumDifference(tree)); // 1
// prettier-ignore
const tree2 = new TreeNode(1, new TreeNode(0), new TreeNode(48, new TreeNode(12), new TreeNode(49)));
console.log(getMinimumDifference(tree2)); // 1
