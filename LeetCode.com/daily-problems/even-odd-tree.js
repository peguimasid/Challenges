function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isEvenOddTree(root) {
  if (!root) return true;

  const queue = [root];
  let flag = true;

  while (queue.length > 0) {
    const size = queue.length;
    let prev = flag ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (flag) {
        if (node.val % 2 === 0 || node.val <= prev) return false;
      } else {
        if (node.val % 2 === 1 || node.val >= prev) return false;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      prev = node.val;
    }
    flag = !flag;
  }

  return true;
}

const tree = new TreeNode(
  1,
  new TreeNode(10, new TreeNode(3, new TreeNode(12), new TreeNode(8))),
  new TreeNode(
    4,
    new TreeNode(7, new TreeNode(6)),
    new TreeNode(9, null, new TreeNode(2))
  )
);

console.log(isEvenOddTree(tree)); // true

const tree2 = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(3), new TreeNode(3)),
  new TreeNode(2, new TreeNode(7))
);

console.log(isEvenOddTree(tree2)); // false
