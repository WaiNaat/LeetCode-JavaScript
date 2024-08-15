/**
온도를 날짜순대로 스택에 넣는데
스택 꼭대기에 본인보다 추운날 i가 있으면 다 빼주면서 answer[i] 부여

스택에 온도를 넣을 필요조차 없음 그냥 며칠인지만 넣으면됨

 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const sol = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i += 1) {
    while (stack.at(-1) !== undefined && temperatures[stack.at(-1)] < temperatures[i]) {
      const day = stack.pop();
      sol[day] = i - day;
    }
    stack.push(i);
  }
  return sol;
};
