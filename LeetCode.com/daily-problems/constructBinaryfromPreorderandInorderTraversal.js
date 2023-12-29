function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (!inorder.length) return null;

  const indexValue = preorder.shift();
  const indexRoot = inorder.indexOf(indexValue);

  let root = new TreeNode(indexValue);
  root.left = buildTree(preorder, inorder.slice(0, indexRoot));
  root.right = buildTree(preorder, inorder.slice(indexRoot + 1));
  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

//      3
//     / \
//    9  20
//      /  \
//     15   7
