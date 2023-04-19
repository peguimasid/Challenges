function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const zigZagCount = (node) => {
  let result = 0;

  let currNode = node;
  let curr = 0;
  while (currNode) {
    currNode = currNode.left;
    if (!currNode) break;
    curr++;
    currNode = currNode.right;
    if (!currNode) break;
    curr++;
  }
  currNode = node;
  result = Math.max(curr, result);
  curr = 0;
  while (currNode) {
    currNode = currNode.right;
    if (!currNode) break;
    curr++;
    currNode = currNode.left;
    if (!currNode) break;
    curr++;
  }
  result = Math.max(curr, result);

  return result;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestZigZag = (root) => {
  let result = 0;

  const traverse = (node) => {
    if (!node) return;
    result = Math.max(result, zigZagCount(node));
    if (node?.left) traverse(node?.left);
    if (node?.right) traverse(node?.right);
  };

  traverse(root);

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
