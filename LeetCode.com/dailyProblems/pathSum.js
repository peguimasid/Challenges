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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  if (!root.left && !root.right) return root.val === targetSum;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

const bt = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
};

console.log(hasPathSum(bt, 22));
