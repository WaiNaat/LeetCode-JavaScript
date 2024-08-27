/**
이거 그냥 mst 그리는문제아님?
근데 크루스칼 프림 둘다까먹음

프림
1. 꼭짓점 하나 골라서 트리로 만들기
2. 모든 꼭짓점이 트리에 없다면
    트리와 외부 세계를 연결하는 간선 중 가장 저렴이를 트리에 추가

크루스칼
1. 모든 꼭짓점을 트리로 만들기
2. 당선된 간선이 n-1개가 아니면
    가장 저렴이 간선이 두 트리를 연결한다면 당선, 두 트리 합치기

간선이 대략 50만개인데 이걸 다 만들어야하나?
프림: 외부세계 연결 시에만 우순큐에 넣으면 됨
크루스칼: 일단 다 만들고 정렬해야함. 대신 우순큐는 필요없고 union-find 필요

유나온 파인드 연습할겸 크루스칼 ㄱ
거리는 맨해튼거리
아 근데 번호에 이름이 없어서 유니온파인드 만들기 위찮긴하네
    이름이 없긴 왜없음 인덱스가있는데

 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const edges = [];
  const pointName = new Map();
  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const cost = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
      edges.push({ a: i, b: j, cost });
    }
  }
  edges.sort((a, b) => b.cost - a.cost);

  const parents = Array.from({ length: points.length }).map((_, idx) => idx);
  const union = (a, b) => {
    const parentA = find(a);
    const parentB = find(b);
    if (parentA !== parentB) {
      parents[parentB] = parentA;
    }
  };
  const find = (v) => {
    if (parents[v] === v) {
      return v;
    }
    parents[v] = find(parents[v]);
    return parents[v];
  };

  const mstEdgeCosts = [];
  while (mstEdgeCosts.length < points.length - 1) {
    const { a, b, cost } = edges.pop();

    const parentA = find(a);
    const parentB = find(b);

    if (parentA === parentB) {
      continue;
    }

    union(parentA, parentB);

    mstEdgeCosts.push(cost);
  }

  const sum = mstEdgeCosts.reduce((prev, cur) => prev + cur, 0);
  return sum;
};
