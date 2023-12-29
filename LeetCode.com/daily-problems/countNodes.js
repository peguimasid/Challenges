/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = (root) => {
  let result = 0;

  const traverse = (node) => {
    result++;
    if (node?.left) traverse(node?.left);
    if (node?.right) traverse(node?.right);
  };
  if (root) traverse(root);

  return result;
};
