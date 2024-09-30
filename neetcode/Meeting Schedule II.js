/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * 겹치지 않는 선에서 최대한 뒤쪽에 남는 시간이 많게
   * 겹치면 새로운 날로 이동
   *
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    const endTimes = [];
    for (let i = 0; i < intervals.length; i += 1) {
      let foundSpace = false;

      for (let j = 0; j < endTimes.length; j += 1) {
        if (endTimes[j] <= intervals[i].start) {
          endTimes[j] = intervals[i].end;
          foundSpace = true;
          break;
        }
      }

      if (!foundSpace) {
        endTimes.push(intervals[i].end);
      }
    }

    return endTimes.length;
  }
}
