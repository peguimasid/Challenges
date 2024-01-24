function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function pseudoPalindromicPaths(root) {
  let result = 0;

  function traverse(node, frequencyCounter) {
    if (!node) return;

    frequencyCounter[node.val] = (frequencyCounter[node.val] || 0) + 1;

    traverse(node.left, { ...frequencyCounter });
    traverse(node.right, { ...frequencyCounter });

    if (!node.left && !node.right) {
      let oddCount = 0;

      for (const freq of Object.values(frequencyCounter)) {
        if (freq % 2 === 1) oddCount++;
      }

      if (oddCount <= 1) result++;
    }
  }

  traverse(root, {});

  return result;
}

const root1 = new TreeNode(2);
root1.left = new TreeNode(3);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(1);
root1.right = new TreeNode(1);
root1.right.right = new TreeNode(1);

console.log(pseudoPalindromicPaths(root1)); // 2

const root2 = new TreeNode(2);
root2.right = new TreeNode(1);
root2.left = new TreeNode(1);
root2.left.left = new TreeNode(1);
root2.left.right = new TreeNode(3);
root2.left.right.right = new TreeNode(1);

console.log(pseudoPalindromicPaths(root2)); // 1
