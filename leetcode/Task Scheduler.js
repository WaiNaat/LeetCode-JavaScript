/**
많이 수행해야 하는 일 먼저 해야 함

우순큐를 써야하는데 우선순위는 이렇게
1. 다음 작업 시작 가능시간
2. 해당 작업의 남은 개수

다음 작업 시작 가능시간이 서로 다르지만 특정 시간 t에 해당 작업들이 수행 가능한 상태일 수 있는가?
    한번에 하나씩 수행하므로 겹칠일은 없어보임
    >> ㄴㄴㄴ 첫번째에 여러개가 등록되므로 충분히 가능한 사례임
그렇다면 어떻게 할것인가
    힙에서 가능한 작업 싹 다 뺀다음에 그걸 정렬해서 우선순위 비교

heap
push
    1. 배열 맨 뒤에 넣기
    2. 부모 끌어내리기
pop
    1. 배열 맨 앞 제거
    2. 배열 맨 뒤 기억
    3. 자식 끌어올리기
    4. 리프에 기억한거 넣기
    5. 부모 끌어내리기

 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
class MinHeap {
  constructor() {
    this.list = [null];
  }

  isPrior(a, b) {
    if (!a) {
      return false;
    }
    if (!b) {
      return true;
    }

    if (a.time !== b.time) {
      return a.time < b.time;
    }
    return a.count > b.count;
  }

  getSize() {
    return this.list.length - 1;
  }

  peek() {
    return this.list[1];
  }

  push(time, count, taskName) {
    this.list.push({ time, count, taskName });
    this.pullParentDown(this.list.length - 1, 1);
  }

  pop() {
    const first = this.list[1];
    const last = this.list.pop();
    if (this.getSize() === 0) {
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

  fillEmptyAndReturnEmptyLeaf(emptyRoot) {
    let empty = emptyRoot;

    while (empty * 2 < this.list.length) {
      const left = empty * 2;
      const right = left + 1;
      const leftValue = this.list[left];
      const rightValue = this.list[right];

      // 두 개의 우선순위가 완전 동일하면 오른쪽을 올려야 함
      if (this.isPrior(leftValue, rightValue)) {
        this.list[empty] = leftValue;
        empty = left;
      } else {
        this.list[empty] = rightValue;
        empty = right;
      }
    }

    return empty;
  }
}

var leastInterval = function (tasks, n) {
  const taskMap = {};
  tasks.forEach((task) => {
    if (!taskMap[task]) {
      taskMap[task] = { time: 1, count: 0 };
    }
    taskMap[task].count += 1;
  });

  const h = new MinHeap();
  Object.entries(taskMap).forEach(([taskName, { time, count }]) => {
    h.push(time, count, taskName);
  });

  let time = 0;
  while (h.getSize() > 0) {
    time += 1;

    const availables = [];
    while (h.getSize() > 0 && h.peek().time <= time) {
      availables.push(h.pop());
    }

    if (availables.length === 0) {
      continue;
    }

    availables.sort((a, b) => {
      return a.count - b.count;
    });

    const task = availables.pop();
    task.count -= 1;
    task.time = time + n + 1;

    if (task.count > 0) {
      availables.push(task);
    }

    availables.forEach((task) => {
      h.push(task.time, task.count, task.taskName);
    });
  }

  return time;
};
