/*
key, value 저장을 위한 객체 하나
js set은 순서보장
*/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.dict = {};
  this.keys = new Set();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.keys.has(key)) {
    return -1;
  }

  this.keys.delete(key);
  this.keys.add(key);

  return this.dict[key];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.keys.has(key) && this.keys.size >= this.capacity) {
    const lruKey = this.keys.keys().next().value;
    this.dict[lruKey] = -1;
    this.keys.delete(lruKey);
  }

  this.dict[key] = value;
  this.keys.delete(key);
  this.keys.add(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
