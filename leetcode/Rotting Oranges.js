/**
클래식 bfs
숫자가 작으므로 배열로 가짜 큐 만들어서 사용
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const EMPTY = 0;
  const FRESH = 1;
  const ROTTEN = 2;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const row = grid.length;
  const col = grid[0].length;
  const times = Array.from({ length: row }).map(() => Array.from({ length: col }).fill(0));
  const q = {
    list: [],
    left: 0,
    getLength() {
      return this.list.length - this.left;
    },
    enqueue(val) {
      this.list.push(val);
    },
    dequeue() {
      if (this.left === this.list.length) return null;
      this.left += 1;
      return this.list[this.left - 1];
    },
  };

  // 벌써 썩은애들 큐에 넣기
  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < col; c += 1) {
      switch (grid[r][c]) {
        case EMPTY:
          break;
        case FRESH:
          times[r][c] = Infinity;
          break;
        case ROTTEN:
          times[r][c] = Infinity;
          q.enqueue([r, c, 0]);
          break;
        default:
          break;
      }
    }
  }

  // bfs
  // 미방문 지점은 time이 Infinity일 때
  while (q.getLength() > 0) {
    const [r, c, time] = q.dequeue();

    if (times[r][c] !== Infinity) continue;
    times[r][c] = time;

    directions.forEach(([dr, dc]) => {
      const r2 = r + dr;
      const c2 = c + dc;

      if (
        r2 < 0 ||
        c2 < 0 ||
        r2 >= row ||
        c2 >= col ||
        times[r2][c2] !== Infinity ||
        grid[r2][c2] !== FRESH
      ) {
        return;
      }

      q.enqueue([r2, c2, time + 1]);
    });
  }

  // 정답 계산
  const sol = Math.max(...times.map((row) => Math.max(...row)));
  return sol === Infinity ? -1 : sol;
};
