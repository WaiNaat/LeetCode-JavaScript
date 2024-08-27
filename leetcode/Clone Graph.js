/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
아 이게 사이클이있네
val이 유일하므로 이걸 이용해서 매핑하면될듯
undirected라서 양쪽 이웃에 추가해줘야함

 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  const clone = new Map();
  const visited = new Set();
  const getNodeWithValue = (value) => {
    if (!clone.has(value)) {
      clone.set(value, new _Node(value));
    }
    return clone.get(value);
  };
  const dfs = (root) => {
    if (!root || visited.has(root.val)) {
      return;
    }

    visited.add(root.val);
    const cur = getNodeWithValue(root.val);

    root.neighbors.forEach((originalNode) => {
      const next = getNodeWithValue(originalNode.val);
      cur.neighbors.push(next);

      if (!visited.has(originalNode.val)) {
        dfs(originalNode);
      }
    });
  };

  dfs(node);

  return node ? clone.get(node.val) : null;
};
