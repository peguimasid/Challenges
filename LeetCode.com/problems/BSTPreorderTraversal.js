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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let result = [];

  const preOrder = (node) => {
    result.push(node.val);
    if (node.right) preOrder(node.right);
    if (node.left) preOrder(node.left);
  };

  if (root) preOrder(root);

  return result;
};
