/**
정렬하면 되는거 아님?

 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  return points
    .toSorted((a, b) => {
      const aDistance = a[0] ** 2 + a[1] ** 2;
      const bDistance = b[0] ** 2 + b[1] ** 2;
      return aDistance - bDistance;
    })
    .slice(0, k);
};
