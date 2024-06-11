/**
우순큐 문제인듯?
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Heap {
  constructor() {
    this.list = [null];
  }

  peek() {
    return this.list[1];
  }

  push(value) {
    this.list.push(value);
    this.pullSmallerParentDown(this.list.length - 1);
  }

  pop() {
    const target = this.list[1];
    if (this.list.length === 1) {
      return target;
    }

    const lastValue = this.list.pop();
    if (this.list.length === 1) {
      return target;
    }

    const empty = this.fillEmptyByRaisingBiggerChild();
    this.list[empty] = lastValue;
    this.pullSmallerParentDown(empty);

    return target;
  }

  pullSmallerParentDown(start) {
    const me = this.list[start];
    let myIndex = start;

    while (myIndex > 1) {
      const parentIndex = Math.floor(myIndex / 2);
      const parent = this.list[parentIndex];
      if (me.value <= parent.value) {
        break;
      }
      this.list[myIndex] = parent;
      myIndex = parentIndex;
    }

    this.list[myIndex] = me;
  }

  fillEmptyByRaisingBiggerChild() {
    let empty = 1;

    while (empty * 2 <= this.list.length - 1) {
      const leftChildIndex = empty * 2;
      const rightChildIndex = empty * 2 + 1;
      const leftChild = this.list[leftChildIndex];
      const rightChild = this.list[rightChildIndex] ?? { value: -Infinity, index: -1 };
      const biggerIndex = leftChild.value < rightChild.value ? rightChildIndex : leftChildIndex;
      const bigger = this.list[biggerIndex];

      this.list[empty] = bigger;
      empty = biggerIndex;
    }

    return empty;
  }
}

var maxSlidingWindow = function (nums, k) {
  const heap = new Heap();

  let left = 0;
  let right = -1;

  while (right < k - 1) {
    right += 1;
    heap.push({ value: nums[right], index: right });
  }

  const sol = [];

  while (right < nums.length) {
    while (heap.peek().index < left) {
      heap.pop();
    }

    sol.push(heap.peek().value);

    left += 1;
    right += 1;
    heap.push({ value: nums[right] ?? -Infinity, index: right });
  }

  return sol;
};
