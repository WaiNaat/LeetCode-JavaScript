/**
최대 크기가 k인 최소 힙을 만드는 문제
힙 내부 원소 개수가 k개일 때 새로 들어오면 heappush, heappop 수행하면 됨

힙 구현
넣기
    1. 배열 맨 뒤에 넣기
    2. 부모 끌어내리기
빼기
    1. 맨앞 값 제거, 맨뒤 값 제거
    2. 자식 끌어올려서 맨앞 빈칸 채우기
    3. 마지막 빈칸에 맨 뒤 값 넣기
    4. 부모 끌어내리기

 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.limit = k;
  this.list = [null];
  nums.forEach((num) => {
    this.add(num);
  });
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.push(val);
  if (this.list.length === this.limit + 2) {
    this.pop();
  }
  return this.peek();
};

KthLargest.prototype.peek = function () {
  return this.list[1];
};

KthLargest.prototype.push = function (val) {
  this.list.push(val);
  this.pullParentDown(this.list.length - 1);
};

KthLargest.prototype.pop = function () {
  const first = this.list[1];
  const last = this.list.pop();

  if (this.list.length === 1) {
    return first;
  }

  const emptyLeaf = this.fillEmptySpaceAndGetEmptyLeaf();
  this.list[emptyLeaf] = last;
  this.pullParentDown(emptyLeaf);

  return first;
};

KthLargest.prototype.pullParentDown = function (position) {
  const target = this.list[position];

  let cur;
  for (
    cur = position;
    cur > 1 && target < this.list[Math.floor(cur / 2)];
    cur = Math.floor(cur / 2)
  ) {
    this.list[cur] = this.list[Math.floor(cur / 2)];
  }

  this.list[cur] = target;
};

KthLargest.prototype.fillEmptySpaceAndGetEmptyLeaf = function () {
  let empty = 1;
  while (empty * 2 < this.list.length) {
    const left = empty * 2;
    const right = left + 1;
    const leftVal = this.list[left] ?? Infinity;
    const rightVal = this.list[right] ?? Infinity;

    if (leftVal < rightVal) {
      this.list[empty] = leftVal;
      empty = left;
    } else {
      this.list[empty] = rightVal;
      empty = right;
    }
  }

  return empty;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
