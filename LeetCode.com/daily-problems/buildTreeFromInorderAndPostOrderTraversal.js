function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  const hash = {};
  for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;

  const recur = (start, end) => {
    if (start > end) return null;
    const value = postorder.pop();
    const root = new TreeNode(value);
    root.right = recur(hash[value] + 1, end);
    root.left = recur(start, hash[value] - 1);
    return root;
  };

  return recur(0, inorder.length - 1);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));

// const inOrder = (node) => {
//   if (node.left) inOrder(node.left);
//   this.queue.push(node.val);
//   if (node.right) inOrder(node.right);
// };

// const postOrder = (node) => {
//   if (node.left) postOrder(node.left);
//   if (node.right) postOrder(node.right);
//   result.push(node.val);
// };
