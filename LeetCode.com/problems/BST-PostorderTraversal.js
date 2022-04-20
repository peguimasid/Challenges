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
var postorderTraversal = function (root) {
  let result = [];

  const postOrder = (node) => {
    if (node.left) postOrder(node.left);
    if (node.right) postOrder(node.right);
    result.push(node.val);
  };

  if (root) postOrder(root);

  return result;
};
