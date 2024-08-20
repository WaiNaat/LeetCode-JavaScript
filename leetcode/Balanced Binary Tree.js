/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
본인을 루트로 하는 트리의 깊이를 알면 될듯?

 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let sol = true;

  const traverse = (node) => {
    if (node === null) {
      return 0;
    }

    const leftDepth = node.left ? traverse(node.left) + 1 : 0;
    const rightDepth = node.right ? traverse(node.right) + 1 : 0;

    sol &&= Math.abs(leftDepth - rightDepth) <= 1;

    return Math.max(leftDepth, rightDepth);
  };

  traverse(root);

  return sol;
};
