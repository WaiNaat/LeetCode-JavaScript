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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const isSameTree = (tree1, tree2) => {
    if (tree1 === null && tree2 === null) {
      return true;
    }

    if (tree1 === null || tree2 === null) {
      return false;
    }

    if (tree1.val !== tree2.val) {
      return false;
    }

    if (
      tree1.left === null &&
      tree2.left === null &&
      tree1.right === null &&
      tree2.right === null
    ) {
      return true;
    }

    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
  };

  const hasSubtree = (tree, target) => {
    if (tree === null) {
      return false;
    }

    if (isSameTree(tree, target)) {
      return true;
    }

    return hasSubtree(tree.left, target) || hasSubtree(tree.right, target);
  };

  return hasSubtree(root, subRoot);
};
