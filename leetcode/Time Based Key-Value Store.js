/*
key를 기준으로 timestamp의 목록을 저장
    timestamp가 strictly increasing한다는 조건 굿
어떤 키가 들어올지 모르므로 Map obj 사용
get -> timestamp를 넘지 않는 가장 가까운 value를 가져옴 (이분탐색)
 */

var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.map.has(key)) {
    this.map.get(key).push({ timestamp, value });
  } else {
    this.map.set(key, [{ timestamp, value }]);
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  const list = this.map.get(key) ?? [];

  let left = 0;
  let right = list.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (list[mid].timestamp <= timestamp) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const target = left - 1;
  return list[target]?.value ?? '';
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
