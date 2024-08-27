/**
다익스트라보다 dp

opt(i, count) := src~i까지 count번만에 가는 최소비용
cost(i, j) := i -> j 이동비용
opt(i, count+1) = min(opt(prev(i), count) + cost(i, prev(i)))

 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const prev = Array.from({ length: n }).map(() => []);
  flights.forEach(([source, dest, cost]) => {
    prev[dest].push([source, cost]);
  });

  let opt = Array.from({ length: n }).fill(Infinity);
  let sol = Infinity;
  opt[src] = 0;

  for (let count = 0; count <= k; count += 1) {
    const nextOpt = Array.from({ length: n }).fill(Infinity);

    for (let i = 0; i < n; i += 1) {
      prev[i].forEach(([source, cost]) => {
        nextOpt[i] = Math.min(opt[source] + cost, nextOpt[i]);
      });
    }

    opt = nextOpt;
    sol = Math.min(sol, opt[dst]);
  }

  return sol === Infinity ? -1 : sol;
};
