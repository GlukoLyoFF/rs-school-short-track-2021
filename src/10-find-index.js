/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, val) {
  let left = 0;
  let right = array.length;
  while (right - left > 1) {
    const mid = parseInt((left + right) / 2, 10);
    if (array[mid] < val) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return (array[left] === val) ? left : right;
}

module.exports = findIndex;
