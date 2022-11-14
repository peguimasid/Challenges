function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isCompleteTree = (root) => {
  if (!root) return true;
  const queue = [root];
  while (queue.length) {
    const curr = queue.shift();
    if (!curr) {
      for (const node of queue) if (node) return false;
      break;
    }
    queue.push(curr.left);
    queue.push(curr.right);
  }
  return true;
};
