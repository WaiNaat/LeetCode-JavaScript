/**
i번 집을 반드시 방문하는 시작점으로 치고 돌리기?

시작점 잡기
모든 집을 대상으로 돌 필요가 있을까?
그냥 첫번째, 두번째 집을 무조건 턴다는 생각으로 돌면 될거같은데
핵심은 마지막 집을 방문하면 첫 번째 집은 털면 안된다는거임

money(i) := i번 집 털고 얻는 돈
opt(i) := 처음부터 i번 집까지 돌았을 때 버는 최대 돈
opt(i) = max(
    opt(i-2)+money(i), // i번 집을 털었을 때
    opt(i-1) // i번 집을 털지 않을 때
)

 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const optWithFirstHouseRobbed = [0, nums[0]];
  for (let house = 1; house < nums.length - 1; house += 1) {
    optWithFirstHouseRobbed.push(
      Math.max(optWithFirstHouseRobbed.at(-2) + nums[house], optWithFirstHouseRobbed.at(-1)),
    );
  }

  const optWithSecondHouseRobbed = [0, 0];
  for (let house = 1; house < nums.length; house += 1) {
    optWithSecondHouseRobbed.push(
      Math.max(optWithSecondHouseRobbed.at(-2) + nums[house], optWithSecondHouseRobbed.at(-1)),
    );
  }

  return Math.max(optWithFirstHouseRobbed.at(-1), optWithSecondHouseRobbed.at(-1));
};
