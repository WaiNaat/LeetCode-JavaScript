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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const validate = (node) => {
    if (node === null) {
      return { isValid: true, max: -Infinity, min: Infinity };
    }

    const leftResult = validate(node.left);
    if (!leftResult.isValid || leftResult.max >= node.val) {
      return { isValid: false, max: -Infinity, min: Infinity };
    }

    const rightResult = validate(node.right);
    if (!rightResult.isValid || rightResult.min <= node.val) {
      return { isValid: false, max: -Infinity, min: Infinity };
    }

    return {
      isValid: true,
      max: Math.max(leftResult.max, rightResult.max, node.val),
      min: Math.min(leftResult.min, rightResult.min, node.val),
    };
  };

  return validate(root).isValid;
};
