/**
사이클이 있는지 판단하는 문제
1. 방문한데를 이미 방문했으면 탈락
2. 아직 방문하지 않은데는 전부 스택에 넣기
3. 본인 방문처리 (셀프 사이클 고려하면 방문을 나중에 해야함 문제 조건에는 없긴함)

O((V+E)*E)=2백만 이므로 간선 하나씩 정성스럽게 지우고 확인해보는것도 가능
그거말고 방법이 없나?
그냥 사이클 당첨됐을 때 본인과 본인이 왔던 곳을 찾아내면 즉시 종료
    하기에는 중복이면 edges에서 젤루 마지막 값을 가져와야 함 >> 그냥 정성스럽게 가는게 나을듯

 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const next = Array.from({ length: edges.length + 1 }).map(() => new Set());
  edges.forEach(([a, b]) => {
    next[a].add(b);
    next[b].add(a);
  });

  const isValidTree = () => {
    const stack = [1];
    const visited = new Set();
    while (stack.length) {
      const cur = stack.pop();

      if (visited.has(cur)) {
        return false;
      }

      next[cur].forEach((v) => {
        if (visited.has(v)) return;
        stack.push(v);
      });

      visited.add(cur);
    }

    return visited.size === edges.length;
  };

  for (let i = edges.length - 1; i >= 0; i -= 1) {
    const [a, b] = edges[i];
    next[a].delete(b);
    next[b].delete(a);

    if (isValidTree()) {
      return [a, b];
    }

    next[a].add(b);
    next[b].add(a);
  }

  return;
};
