/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
preorder 맨앞꺼 뽑기 << 루트
inorder에서 뽑기한거 기준으로 왼쪽 오른쪽 나눌수있음
나눠진 왼쪽 오른쪽도 preorder inorder 순서가 맞음 -> 재귀

 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const rootLeftSize = inorder.findIndex((value) => value === preorder[0]);
  const leftPreorder = preorder.slice(1, 1 + rootLeftSize);
  const leftInorder = inorder.slice(0, rootLeftSize);
  const rightPreorder = preorder.slice(1 + rootLeftSize);
  const rightInorder = inorder.slice(1 + rootLeftSize);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};
