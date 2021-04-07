/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let res = '';
  let cur = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (cur === str[i]) {
      count++;
    } else {
      if (count > 1) {
        res = `${res}${count}${cur}`;
      } else {
        res = `${res}${cur}`;
      }
      count = 1;
      cur = str[i];
    }
  }
  if (count > 1) {
    res = `${res}${count}${cur}`;
  } else {
    res = `${res}${cur}`;
  }
  return res;
}

module.exports = encodeLine;
