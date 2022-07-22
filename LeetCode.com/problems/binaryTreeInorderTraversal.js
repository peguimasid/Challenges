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
  let result = [];

  let traverse = (node) => {
    if (node?.left) traverse(node.left);
    if (node !== null && node?.val) result.push(node.val);
    if (node?.right) traverse(node.right);
  };

  traverse(root);

  return result;
};

let bt = new TreeNode();

console.log(inorderTraversal(bt));
