/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
재귀하는문제

 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return root;
  }

  const tempLeft = root.left;
  root.left = root.right;
  root.right = tempLeft;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
