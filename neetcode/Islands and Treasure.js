const LAND = 2_147_483_647;
const TREASURE = 0;
const WATER = -1;

class Solution {
  /**
   * 클래식 bfs
   *
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    // 배열을 이용한 가짜 큐
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
        if (this.getLength() === 0) return null;
        this.left += 1;
        return this.list[this.left - 1];
      },
    };
    const row = grid.length;
    const col = grid[0].length;
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    const visited = new Set();

    for (let r = 0; r < row; r += 1) {
      for (let c = 0; c < col; c += 1) {
        if (grid[r][c] === TREASURE) {
          q.enqueue([r, c, 0]);
        }
      }
    }

    while (q.getLength() > 0) {
      const [r, c, distance] = q.dequeue();

      if (visited.has(`${r} ${c}`)) continue;
      visited.add(`${r} ${c}`);
      grid[r][c] = distance;

      directions.forEach(([dr, dc]) => {
        const r2 = r + dr;
        const c2 = c + dc;

        if (
          r2 < 0 ||
          r2 >= row ||
          c2 < 0 ||
          c2 >= col ||
          visited.has(`${r2} ${c2}`) ||
          grid[r2][c2] === WATER
        ) {
          return;
        }

        q.enqueue([r2, c2, distance + 1]);
      });
    }

    return grid;
  }
}
