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
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    intervals.sort((a, b) => a.start - b.end);

    for (let i = 1; i < intervals.length; i += 1) {
      if (intervals[i].start < intervals[i - 1].end) {
        return false;
      }
    }

    return true;
  }
}
