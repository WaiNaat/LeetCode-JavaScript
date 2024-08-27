/**
흠.. 다익스트라 쓸까?
크루스칼로 어떻게든 안되나? 이게 mst는 또 아니라서 안될거같음

다익
1. 우순큐에서 뽑기
2. 그 점을 거쳐서 그 점과 연결된 곳으로 가는 비용들 다시 우순큐에 넣기

하나라도 도달가능한 점이 있는지 없는지 보기

힙
push
    배열 맨뒤에 넣기
    부모 끌어내리기
pop
    배열 맨앞 제거
    배열 맨뒤 기억
    자식 끌어올려서 빈칸 채추기
    빈 리프에 기억한거 넣기
    부모 끌어내리기

 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const next = Array.from({ length: n + 1 }).map(() => []);
  times.forEach(([source, dest, cost]) => {
    next[source].push([dest, cost]);
  });

  const costs = Array.from({ length: n + 1 }).fill(Infinity);
  costs[0] = 0;

  h = new Heap();
  h.push([k, 0]);

  while (h.length > 0) {
    const [cur, distance] = h.pop();

    if (costs[cur] !== Infinity) {
      continue;
    }
    costs[cur] = distance;

    next[cur].forEach(([dest, cost], i) => {
      h.push([dest, distance + cost]);
    });
  }

  const max = Math.max(...costs);
  return max === Infinity ? -1 : max;
};

class Heap {
  constructor() {
    this.list = [null];
    this.length = 0;
  }

  push(val) {
    this.length += 1;
    this.list.push(val);
    this.pullParentDown(this.length, 1);
  }

  pop() {
    const first = this.list[1];
    const last = this.list.pop();
    this.length -= 1;

    if (this.length === 0) {
      return first;
    }

    const leaf = this.fillEmptyAndReturnEmptyLeaf(1);
    this.list[leaf] = last;
    this.pullParentDown(leaf, 1);

    return first;
  }

  pullParentDown(leaf, root) {
    const target = this.list[leaf];
    let cur;
    for (
      cur = leaf;
      cur > root && this.isPrior(target, this.list[Math.floor(cur / 2)]);
      cur = Math.floor(cur / 2)
    ) {
      this.list[cur] = this.list[Math.floor(cur / 2)];
    }
    this.list[cur] = target;
  }

  fillEmptyAndReturnEmptyLeaf(root) {
    let empty = root;
    while (empty * 2 <= this.length) {
      const left = empty * 2;
      const right = left + 1;
      const leftChild = this.list[left];
      const rightChild = this.list[right];

      if (!rightChild || this.isPrior(leftChild, rightChild)) {
        this.list[empty] = leftChild;
        empty = left;
      } else {
        this.list[empty] = rightChild;
        empty = right;
      }
    }
    return empty;
  }

  // [vertexName, totalCost]
  isPrior(a, b) {
    if (!a) {
      return false;
    }
    if (!b) {
      return true;
    }
    return a[1] < b[1];
  }
}
