/**
그냥 힙 구현하는 문제
heapify
    1. 자식이 있는 모든 노드에 대해 (배열 뒤쪽부터)
    2. 본인을 제거
    3. 자식 끌어올려 빈칸 채우기
    4. 빈 리프노드에 제거한 본인 넣기
    5. 부모 끌어내리기 (본인 원래 자리까지만)
push
    1. 배열 맨 뒤에 넣기
    2. 부모 끌어내리기
pop
    1. 맨 앞 값 제거
    2. 맨 뒤 값 제거
    3. 자식 끌어올려 빈칸 채우기
    4. 빈 리프노드에 제거한 맨 뒤 값 넣기
    5. 부모 끌어내리기

 * @param {number[]} stones
 * @return {number}
 */
class MaxHeap {
  constructor(list) {
    this.list = [null, ...list];
    this.heapify();
  }

  isValidHeap(list) {
    for (let i = 1; i < list.length; i += 1) {
      const left = list[i * 2] ?? -Infinity;
      const right = list[i * 2 + 1] ?? -Infinity;
      if (!(list[i] >= left && list[i] >= right)) {
        return false;
      }
    }
    return true;
  }

  getSize() {
    return this.list.length - 1;
  }

  heapify() {
    for (let i = Math.floor(this.list.length / 2); i > 0; i -= 1) {
      const val = this.list[i];
      const leaf = this.fillEmptyAndReturnLeaf(i);
      this.list[leaf] = val;
      this.pullParentDown(leaf, i);
    }
  }

  push(val) {
    this.list.push(val);
    this.pullParentDown(this.list.length - 1);
  }

  pop() {
    if (this.list.length === 1) {
      return 0;
    }

    const first = this.list[1];
    const last = this.list.pop();

    if (this.list.length === 1) {
      return first;
    }

    const leaf = this.fillEmptyAndReturnLeaf(1);
    this.list[leaf] = last;
    this.pullParentDown(leaf);

    return first;
  }

  pullParentDown(pos, rootPos = 1) {
    const target = this.list[pos];
    let cur;
    for (
      cur = pos;
      cur > rootPos && target > this.list[Math.floor(cur / 2)];
      cur = Math.floor(cur / 2)
    ) {
      this.list[cur] = this.list[Math.floor(cur / 2)];
    }
    this.list[cur] = target;
  }

  fillEmptyAndReturnLeaf(pos) {
    let cur = pos;
    while (cur * 2 < this.list.length) {
      const left = cur * 2;
      const right = left + 1;
      const leftVal = this.list[left] ?? -Infinity;
      const rightVal = this.list[right] ?? -Infinity;

      if (leftVal > rightVal) {
        this.list[cur] = leftVal;
        cur = left;
      } else {
        this.list[cur] = rightVal;
        cur = right;
      }
    }
    return cur;
  }
}

var lastStoneWeight = function (stones) {
  const heap = new MaxHeap(stones);
  while (heap.getSize() > 1) {
    const y = heap.pop();
    const x = heap.pop();
    if (x !== y) {
      heap.push(y - x);
    }
  }
  return heap.pop();
};
